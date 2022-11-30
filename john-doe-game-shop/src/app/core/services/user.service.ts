import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Link } from '../models/link';
import { Me } from '../models/me';
import { Settings } from '../models/settings';
import { User } from '../models/user';
import { OPTIONS } from '../tokens.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject(OPTIONS) private settings: Settings, private http: HttpClient) { }

  login(credentials: Credentials) : Observable<Me> {

    const founded = this.settings.credentials.filter(x => x.username === credentials.username && x.password === credentials.password);

    if (founded.length !== 1){
      throw new Error("bad credentials")
    }

    // TODO: validate credentials (user, password)
    return this.http.get<Me>(this.settings.uri);
  }

  user(link: Link) : Observable<User> {
    return this.http.get<User>(link.href);
  }
}
