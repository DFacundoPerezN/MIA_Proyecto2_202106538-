import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservecarComponent } from './reservecar.component';

describe('ReservecarComponent', () => {
  let component: ReservecarComponent;
  let fixture: ComponentFixture<ReservecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservecarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
