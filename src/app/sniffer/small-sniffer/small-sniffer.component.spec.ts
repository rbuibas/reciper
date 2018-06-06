import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSnifferComponent } from './small-sniffer.component';

describe('SmallSnifferComponent', () => {
  let component: SmallSnifferComponent;
  let fixture: ComponentFixture<SmallSnifferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallSnifferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSnifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
