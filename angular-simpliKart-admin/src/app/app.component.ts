import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [NgbNavConfig] 
})
export class AppComponent {
  title = 'angular-simpliKart-admin';

  constructor(private ngbNavConfig: NgbNavConfig, 
    private translate: TranslateService) {
    this.translate.use('en');
  }
}
