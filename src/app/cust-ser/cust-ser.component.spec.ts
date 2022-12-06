import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSerComponent } from './cust-ser.component';

describe('CustSerComponent', () => {
  let component: CustSerComponent;
  let fixture: ComponentFixture<CustSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
