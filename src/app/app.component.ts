import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/passwordChecker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-forms-with-custom-validator';
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      acceptTandC: [false, Validators.required]
    }, {
      validators: PasswordChecker('password', 'confirmPassword')
    });
  }

  resetForm() {
    this.userForm?.reset();
  }

  get h(){
    return this.userForm.controls;
  }

  onSubmit() {
    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
  }
}
