import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Windowcleaning } from './windowcleaning';

describe('Windowcleaning', () => {
  let component: Windowcleaning;
  let fixture: ComponentFixture<Windowcleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Windowcleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Windowcleaning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
