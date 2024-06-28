import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterflyComponent } from './registerfly.component';

describe('RegisterflyComponent', () => {
  let component: RegisterflyComponent;
  let fixture: ComponentFixture<RegisterflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterflyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
