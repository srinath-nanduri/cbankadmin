import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettComponent } from './sett.component';

describe('SettComponent', () => {
  let component: SettComponent;
  let fixture: ComponentFixture<SettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
