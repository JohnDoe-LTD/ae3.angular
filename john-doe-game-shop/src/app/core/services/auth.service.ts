import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Identity } from '../models/identity';
import { Settings } from '../models/settings';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private static userKey : string = "user";

  public onLoginEvent = new EventEmitter<Identity|undefined>();
  public onLogoutEvent = new EventEmitter<void>();

  constructor(
    @Inject('settings') private settings: Settings,
    private http: HttpClient,
    private store: StoreService
  ) {}

  public signin(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.http
        .get<Credentials[]>(this.settings.uri, { responseType: 'json' })
        .subscribe((credentials) => {
          let founded = this.findUser(credentials, username, password);
          if (founded) {
            this.setUser(credentials, username, password);
            this.onLoginEvent.emit(this.user());
          }
          subscriber.next(founded);
        });
    });
  }

  public signout(): void {
    this.store.reset();

    this.onLogoutEvent.emit();
  }

  public user() : Identity | undefined {
    const json = this.store.get(AuthService.userKey);
    if (json === ''){
      return undefined;
    }
    return JSON.parse(json);
  }

  public isAuthenticated() : boolean {
    return this.store.get(AuthService.userKey) !== '';
  }

  private findUser(
    credentials: Credentials[],
    username: string,
    password: string
  ): boolean {
    const founded = credentials.filter(
      (x) => x.username === username && x.password === password
    );

    return founded.length === 1;
  }

  private setUser(
    credentials: Credentials[],
    username: string,
    password: string
  ): void {
    const credential : Credentials = credentials.filter(
      (x) => x.username === username && x.password === password
    )[0];
    let identity : Identity = {
      username: credential.username,
      token: credential.token,
      uri: credential.uri
    };
    this.store.set(AuthService.userKey, JSON.stringify(identity));
  }
}
