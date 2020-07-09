import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoMsgComponent } from './sucesso-msg.component';

describe('SucessoMsgComponent', () => {
  let component: SucessoMsgComponent;
  let fixture: ComponentFixture<SucessoMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessoMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessoMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
