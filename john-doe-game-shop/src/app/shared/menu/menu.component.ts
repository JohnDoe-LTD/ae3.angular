import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  private authtenticatied: boolean = false;
  private username: string = '';
  private loginSub: Subscription | undefined;
  private logoutSub: Subscription | undefined;

  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public title: string = '';

  public isAuthenticated(): boolean {
    return this.authtenticatied;
  }

  public name(): string {
    return this.username;
  }

  constructor(store: StoreService, private authService: UserService) {
    let username: string = store.get('username');
    if (username?.length > 0) {
      this.authtenticatied = true;
      this.username = username;
      return;
    }
    this.authtenticatied = false;
    this.username = '';
  }

  ngOnDestroy(): void {
    if (this.loginSub !== undefined) {
      this.loginSub.unsubscribe();
    }

    if (this.logoutSub !== undefined) {
      this.logoutSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loginSub = this.authService.status.subscribe(this.setUsername);
    this.logoutSub = this.authService.status.subscribe(this.reset);
  }

  private setUsername = () => {
    this.username = '';
    this.authtenticatied = true;
  };

  private reset = () => {
    this.username = '';
    this.authtenticatied = false;
  };
}
