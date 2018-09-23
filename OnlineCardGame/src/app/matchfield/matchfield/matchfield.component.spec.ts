import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchfieldComponent } from './matchfield.component';

describe('MatchfieldComponent', () => {
  let component: MatchfieldComponent;
  let fixture: ComponentFixture<MatchfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
