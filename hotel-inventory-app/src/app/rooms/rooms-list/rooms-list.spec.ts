import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsList } from './rooms-list';

describe('RoomsList', () => {
  let component: RoomsList;
  let fixture: ComponentFixture<RoomsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
