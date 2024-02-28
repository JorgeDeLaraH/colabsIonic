import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyFormPage } from './empty-form.page';

describe('EmptyFormPage', () => {
  let component: EmptyFormPage;
  let fixture: ComponentFixture<EmptyFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmptyFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
