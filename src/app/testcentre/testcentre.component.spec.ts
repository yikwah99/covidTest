import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcentreComponent } from './testcentre.component';

describe('TestcentreComponent', () => {
  let component: TestcentreComponent;
  let fixture: ComponentFixture<TestcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
