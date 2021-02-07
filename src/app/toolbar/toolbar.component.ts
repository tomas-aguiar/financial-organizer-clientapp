import {Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public languageToogle = new EventEmitter<string>();
  languages: string[] = ['en', 'br'];

  constructor() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public onLanguageClick(language: string) {
    this.languageToogle.emit(language);
  }
}
