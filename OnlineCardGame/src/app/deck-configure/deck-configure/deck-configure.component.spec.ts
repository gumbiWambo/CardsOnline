import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckConfigureComponent } from './deck-configure.component';

describe('DeckConfigureComponent', () => {
  let component: DeckConfigureComponent;
  let fixture: ComponentFixture<DeckConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
