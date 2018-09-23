import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSlotComponent } from './hero-slot.component';

describe('HeroSlotComponent', () => {
  let component: HeroSlotComponent;
  let fixture: ComponentFixture<HeroSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
