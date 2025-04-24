import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  // standalone: true,
  imports: [CommonModule, RouterModule,FormsModule ,ReactiveFormsModule , TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form!: FormGroup;

//  @Select(SettingState.setting) setting$: Observable<Values>;

constructor (
  private router: Router,
  private formBuilder: FormBuilder
) {
  this.form = this.formBuilder.group({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  })
}

  onSubmitForm() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      // this.store.dispatch(new Login(this.form.value)).subscribe({
      //     complete: () => {
      //       this.router.navigateByUrl('/dashboard');
      //     }
      //   }
      // );
      console.log("welcome")
    }
  }
  
}
