import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercarComponent } from './registercar.component';

describe('RegistercarComponent', () => {
  let component: RegistercarComponent;
  let fixture: ComponentFixture<RegistercarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistercarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
