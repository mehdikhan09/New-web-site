import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecleaning } from './homecleaning';

describe('Homecleaning', () => {
  let component: Homecleaning;
  let fixture: ComponentFixture<Homecleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homecleaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
