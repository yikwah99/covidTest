import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestkitListComponent } from './manage-testkit-list.component';

describe('ManageTestkitListComponent', () => {
  let component: ManageTestkitListComponent;
  let fixture: ComponentFixture<ManageTestkitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTestkitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestkitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
