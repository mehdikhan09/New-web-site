import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serv } from './serv';

describe('Serv', () => {
  let component: Serv;
  let fixture: ComponentFixture<Serv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
