import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AppModule {}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {

  public isSended : boolean = false;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(100),
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });

  public isInvalid(field: string): boolean {
    if (this.contactForm.get(field) === undefined) {
      throw Error(`invalid fieldName: ${field}`);
    }

    return (
      this.contactForm.get(field)!.invalid &&
      this.contactForm.get(field)!.dirty &&
      this.contactForm.get(field)!.touched
    );
  }

  public cssClass(field: string): string {
    if (this.contactForm.get(field) === undefined) {
      throw Error(`invalid fieldName: ${field}`);
    }

    return this.isInvalid(field) ? 'form-control has-error' : 'form-control';
  }

  public onSubmit(): void {
    console.log(this.contactForm.value);
    this.isSended = true;
  }
}
