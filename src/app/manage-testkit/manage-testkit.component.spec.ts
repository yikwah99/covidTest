import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestkitComponent } from './manage-testkit.component';

describe('ManageTestkitComponent', () => {
  let component: ManageTestkitComponent;
  let fixture: ComponentFixture<ManageTestkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTestkitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
