import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public feedback: string = '';

  public loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle("John Doe's Game Shop | Login");
  }

  public isInvalid(field: string): boolean {
    if (this.loginForm.get(field) === undefined) {
      throw new Error(`Invalid field name: ${field}`);
    }

    return (
      this.loginForm.get(field)!.invalid &&
      this.loginForm.get(field)!.touched &&
      this.loginForm.get(field)!.dirty
    );
  }

  public cssClass(field: string): string {
    if (this.loginForm.get(field) === undefined) {
      throw Error(`invalid fieldName: ${field}`);
    }

    return this.isInvalid(field) ? 'form-group has-error' : 'form-group';
  }

  public onSubmit(): void {
    this.feedback = '';

    this.authService
      .signin(
        this.loginForm.get('username')!.value!,
        this.loginForm.get('password')!.value!
      )
      .subscribe((result) => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.loginForm.get('password')?.setValue('');
          this.loginForm.reset();
          this.feedback =
            'Something was wrong! We could not find the credentials requested.';
        }
      });
  }
}
