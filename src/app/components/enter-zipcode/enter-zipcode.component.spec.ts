import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterZipcodeComponent } from './enter-zipcode.component';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('EnterZipcodeComponent', () => {
  let component: EnterZipcodeComponent;
  let fixture: ComponentFixture<EnterZipcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterZipcodeComponent ],
      imports: [LoggerTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
