import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldServiceComponent } from './world-service.component';

describe('WorldServiceComponent', () => {
  let component: WorldServiceComponent;
  let fixture: ComponentFixture<WorldServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
