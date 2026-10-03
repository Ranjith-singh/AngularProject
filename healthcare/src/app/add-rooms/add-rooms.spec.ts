import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRooms } from './add-rooms';

describe('AddRooms', () => {
  let component: AddRooms;
  let fixture: ComponentFixture<AddRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
