import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsshoInputComponent } from './issho-input.component';

describe('IsshoInputComponent', () => {
  let component: IsshoInputComponent;
  let fixture: ComponentFixture<IsshoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsshoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsshoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
