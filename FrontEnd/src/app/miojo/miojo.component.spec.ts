import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiojoComponent } from './miojo.component';

describe('MiojoComponent', () => {
  let component: MiojoComponent;
  let fixture: ComponentFixture<MiojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
