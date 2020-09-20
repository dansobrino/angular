import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgDetailComponent } from './mg-detail.component';

describe('MgDetailComponent', () => {
  let component: MgDetailComponent;
  let fixture: ComponentFixture<MgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
