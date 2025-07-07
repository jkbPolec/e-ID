import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainCardComponent } from './plain-card.component';

describe('PlainCardComponent', () => {
  let component: PlainCardComponent;
  let fixture: ComponentFixture<PlainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
