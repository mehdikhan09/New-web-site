import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generalcleaning } from './generalcleaning';

describe('Generalcleaning', () => {
  let component: Generalcleaning;
  let fixture: ComponentFixture<Generalcleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generalcleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generalcleaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
