import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposUserPage } from './repos-user.page';

describe('ReposUserPage', () => {
  let component: ReposUserPage;
  let fixture: ComponentFixture<ReposUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
