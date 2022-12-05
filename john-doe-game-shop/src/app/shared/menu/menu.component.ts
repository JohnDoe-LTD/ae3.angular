import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Image } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {

  private onLoginSub: Subscription | undefined;
  private onLogoutSub: Subscription | undefined;

  public isAuthenticated : boolean = false;

  @Input() public logo: Image | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.authService = authService;
    this.isAuthenticated = this.authService.isAuthenticated()
  }

  public name(): string {
    if (this.authService.isAuthenticated()) {
      return this.authService.user()!.username;
    }
    return '';
  }

  public logout() : void {
    this.authService.signout();
    this.router.navigate(["/"]);
  }

  ngOnDestroy(): void {
    if (this.onLoginSub !== undefined) {
      this.onLoginSub.unsubscribe();
    }

    if (this.onLogoutSub !== undefined) {
      this.onLogoutSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.onLoginSub = this.authService.onLoginEvent.subscribe((user) => {
      this.isAuthenticated = true;
    });
    this.onLogoutSub = this.authService.onLogoutEvent.subscribe(() => {
      this.isAuthenticated = false;
    });
  }
}
