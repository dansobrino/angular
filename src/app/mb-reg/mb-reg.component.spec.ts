import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbRegComponent } from './mb-reg.component';

describe('MbRegComponent', () => {
  let component: MbRegComponent;
  let fixture: ComponentFixture<MbRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
