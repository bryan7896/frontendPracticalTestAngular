import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { SecondPageComponent } from './second-page.component';
import { of } from 'rxjs';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPageComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
      ],
    });

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls with disabled state', () => {
    const idNumberControl = component.formGroup.get('idNumber');
    const typeIdControl = component.formGroup.get('typeId');
    const countryControl = component.formGroup.get('country');

    expect(idNumberControl?.disabled).toBeTrue();
    expect(typeIdControl?.disabled).toBeTrue();
    expect(countryControl?.disabled).toBeTrue();
  });


  it('should navigate to the home page when goBack is called', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.goBack();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should set formGroup value from formData$', () => {
    const mockFormData = {
      idNumber: '12345678',
      typeId: 'Cédula de ciudadanía',
      country: 'Colombia',
    };
    spyOn(store, 'select').and.returnValue(of(mockFormData));
    component.ngOnInit();
    expect(component.formGroup.value).toEqual(mockFormData);
  });
});
