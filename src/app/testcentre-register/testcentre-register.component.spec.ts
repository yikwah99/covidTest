import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcentreRegisterComponent } from './testcentre-register.component';

describe('TestcentreRegisterComponent', () => {
  let component: TestcentreRegisterComponent;
  let fixture: ComponentFixture<TestcentreRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcentreRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcentreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
