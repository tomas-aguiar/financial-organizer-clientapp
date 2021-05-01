import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGetComponent } from './test-get.component';

describe('TestGetComponent', () => {
  let component: TestGetComponent;
  let fixture: ComponentFixture<TestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
