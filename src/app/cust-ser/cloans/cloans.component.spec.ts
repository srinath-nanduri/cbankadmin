import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloansComponent } from './cloans.component';

describe('CLoansComponent', () => {
  let component: CloansComponent;
  let fixture: ComponentFixture<CloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
