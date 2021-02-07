import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'financial-organizer-fe';
  opened = true;
  _translate: TranslateService;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this._translate = translate;
  }

  public languageToogle(language: string) {
    this._translate.use(language);
  }
}
