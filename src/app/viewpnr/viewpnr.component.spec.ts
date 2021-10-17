import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpnrComponent } from './viewpnr.component';

describe('ViewpnrComponent', () => {
  let component: ViewpnrComponent;
  let fixture: ComponentFixture<ViewpnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
