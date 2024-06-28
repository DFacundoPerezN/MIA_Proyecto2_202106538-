import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveflyComponent } from './reservefly.component';

describe('ReserveflyComponent', () => {
  let component: ReserveflyComponent;
  let fixture: ComponentFixture<ReserveflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveflyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
