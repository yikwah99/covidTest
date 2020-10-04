import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfficerComponent } from './record-officer.component';

describe('RecordOfficerComponent', () => {
  let component: RecordOfficerComponent;
  let fixture: ComponentFixture<RecordOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
