import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIdPageComponent } from './employee-id-page.component';

describe('EmployeeIdPageComponent', () => {
  let component: EmployeeIdPageComponent;
  let fixture: ComponentFixture<EmployeeIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeIdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
