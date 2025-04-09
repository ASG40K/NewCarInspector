import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestGarageComponent } from './guest-garage.component';

describe('GuestGarageComponent', () => {
  let component: GuestGarageComponent;
  let fixture: ComponentFixture<GuestGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestGarageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
