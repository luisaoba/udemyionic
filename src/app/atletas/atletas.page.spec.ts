import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasPage } from './atletas.page';

describe('AtletasPage', () => {
  let component: AtletasPage;
  let fixture: ComponentFixture<AtletasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
