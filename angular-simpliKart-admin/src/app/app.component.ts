import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NgbNavConfig] 
})

export class AppComponent implements OnInit{
  title = 'angular-simpliKart-admin';

  constructor(private  ngbNavConfig: NgbNavConfig, 
    private translate: TranslateService) {
      translate.setDefaultLang('en');
      translate.use('en');
  }
  ngOnInit(): void {
    // this.translate.setDefaultLang('en');
    // this.translate.use('en').subscribe(() => {
    //   console.log('English translations loaded');
    // });

  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}