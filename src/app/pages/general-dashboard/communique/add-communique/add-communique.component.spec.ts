import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommuniqueComponent } from './add-communique.component';

describe('AddCommuniqueComponent', () => {
  let component: AddCommuniqueComponent;
  let fixture: ComponentFixture<AddCommuniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommuniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommuniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
