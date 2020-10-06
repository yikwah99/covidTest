import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfficerListComponent } from './record-officer-list.component';

describe('RecordOfficerListComponent', () => {
  let component: RecordOfficerListComponent;
  let fixture: ComponentFixture<RecordOfficerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordOfficerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
