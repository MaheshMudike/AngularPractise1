import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataNodesqlComponent } from './view-data-nodesql.component';

describe('ViewDataNodesqlComponent', () => {
  let component: ViewDataNodesqlComponent;
  let fixture: ComponentFixture<ViewDataNodesqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataNodesqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataNodesqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
