import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-update-password',
  imports: [CommonModule, RouterModule,FormsModule ,ReactiveFormsModule , TranslateModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {

  public form!: FormGroup;
  public show: boolean = false;

  constructor (
    public router: Router,
    public formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      newPassword: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])
    })
  }

  showPassword() {
    this.show = !this.show;
  }
  

  onSubmitForm() {}

}
