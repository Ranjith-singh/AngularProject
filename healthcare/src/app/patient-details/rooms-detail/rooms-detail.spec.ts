import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsDetail } from './rooms-detail';

describe('RoomsDetail', () => {
  let component: RoomsDetail;
  let fixture: ComponentFixture<RoomsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
