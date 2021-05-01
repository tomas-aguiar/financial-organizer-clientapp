import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {SidenavService} from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'financial-organizer-fe';
  opened: boolean = false;

  constructor(private translate: TranslateService, private sidenav: SidenavService) {
    translate.setDefaultLang('en');
    translate.use('en');
    sidenav.toggle$.subscribe(data => {
      this.opened = data as boolean;
      console.log('subscription' + this.opened);
    });
  }

  public languageToggle(language: string): void {
    this.translate.use(language);
  }
}
