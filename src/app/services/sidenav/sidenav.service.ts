import {Injectable, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private toggle: boolean = false;
  toggle$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onToggle(): void {
    this.toggle = !this.toggle;
    this.toggle$.emit(this.toggle);
  }
}
