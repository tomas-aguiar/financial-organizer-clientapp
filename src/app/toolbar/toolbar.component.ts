import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
