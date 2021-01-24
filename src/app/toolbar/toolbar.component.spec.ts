import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import {By} from '@angular/platform-browser';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have a menu button', () => {
    const button = fixture.nativeElement.querySelector('.menu-icon');
    button.click();
    fixture.detectChanges();
  });

  it ('should have title', () => {
    const title = fixture.nativeElement.querySelector('.toolbar-title').innerText;
    expect(title).toBe('Financial Organizer');
  });

  it ('should have a languages button', () => {
    const button = fixture.debugElement.queryAll(By.css('button'));
    button[1].nativeElement.click();
    fixture.detectChanges();
  });
});
