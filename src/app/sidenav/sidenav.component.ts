import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {SidenavService} from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router, private sidenav: SidenavService) { }

  ngOnInit(): void {}

  openBalance(): void {
    this.sidenav.onToggle();
    this.router.navigate(['/get-categories']);
  }
}
