import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongjiComponent } from './tongji.component';

describe('TongjiComponent', () => {
  let component: TongjiComponent;
  let fixture: ComponentFixture<TongjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
