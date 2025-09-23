import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recoreviews } from './recoreviews';

describe('Recoreviews', () => {
  let component: Recoreviews;
  let fixture: ComponentFixture<Recoreviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recoreviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recoreviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
