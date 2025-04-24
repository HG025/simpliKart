import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-otp',
  imports: [CommonModule, RouterModule,FormsModule ,ReactiveFormsModule , TranslateModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  public form!: FormGroup;

  constructor(
    public router: Router,
    public formBuiler: FormBuilder
  ) {
    this.form = this.formBuiler.group({
      otp : new FormControl('', [Validators.required])
    })
  }


  onSubmitForm() {}

}
