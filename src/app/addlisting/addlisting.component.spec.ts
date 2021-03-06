/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddlistingComponent } from './addlisting.component';

describe('AddlistingComponent', () => {
  let component: AddlistingComponent;
  let fixture: ComponentFixture<AddlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
