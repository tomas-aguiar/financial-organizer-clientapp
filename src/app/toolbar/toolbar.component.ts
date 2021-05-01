import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SidenavService} from '../services/sidenav/sidenav.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  @Output() public languageToggle = new EventEmitter<string>();
  languages: string[] = ['en', 'br'];

  constructor(private sidenav: SidenavService) { }

  public onLanguageClick(language: string): void {
    this.languageToggle.emit(language);
  }

  toggle(): void {
    this.sidenav.onToggle();
  }
}
