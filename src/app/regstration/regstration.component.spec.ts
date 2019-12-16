import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstrationComponent } from './regstration.component';

describe('RegstrationComponent', () => {
  let component: RegstrationComponent;
  let fixture: ComponentFixture<RegstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
