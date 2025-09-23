import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCleaning } from './moving-cleaning';

describe('MovingCleaning', () => {
  let component: MovingCleaning;
  let fixture: ComponentFixture<MovingCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingCleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingCleaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
