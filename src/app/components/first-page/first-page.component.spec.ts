import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageComponent } from './first-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
      ],
    });

    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const { idNumber, typeId, country } = component.formGroup.value;
    expect(idNumber).toEqual('');
    expect(typeId).toEqual('');
    expect(country).toEqual('');
  });

  it('should display error messages for required fields when submitting without filling them', () => {
    component.onSubmit();
    const { idNumber, typeId, country } = component.formGroup.controls;
    expect(idNumber.hasError('required')).toBe(true);
    expect(typeId.hasError('required')).toBe(true);
    expect(country.hasError('required')).toBe(true);
  });

});
