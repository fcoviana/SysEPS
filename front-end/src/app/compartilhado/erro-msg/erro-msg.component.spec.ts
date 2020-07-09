import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroMsgComponent } from './erro-msg.component';

describe('ErroMsgComponent', () => {
  let component: ErroMsgComponent;
  let fixture: ComponentFixture<ErroMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
