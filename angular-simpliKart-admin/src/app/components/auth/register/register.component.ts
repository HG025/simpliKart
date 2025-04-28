import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterModule,FormsModule ,ReactiveFormsModule , TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public form!: FormGroup;

  constructor (
    public router: Router,
    public formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      name : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirm_password: new FormControl('',[Validators.required]),
      store_name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      country_code: new FormControl('', [Validators.required]),
      phone: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required])
    })
  }
onSubmitForm() {
}

get passwordMatchError() {
  return (
    this.form.getError('mismatch') &&
    this.form.get('password_confirmation')?.touched
  );
}

}
