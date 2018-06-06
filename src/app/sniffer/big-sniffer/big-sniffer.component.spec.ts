import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSnifferComponent } from './big-sniffer.component';

describe('BigSnifferComponent', () => {
  let component: BigSnifferComponent;
  let fixture: ComponentFixture<BigSnifferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigSnifferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSnifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
