import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  private formData$: Observable<any> = this.store.select(state => state.formData);
  formData: any;
  private countries$: Observable<any> = this.store.select(state => state.countries);
  countries: any;

  formGroup: FormGroup = new FormGroup({
    idNumber: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern(/^\d{8,11}$/)
    ]),
    typeId: new FormControl({ value: '', disabled: true }, [Validators.required]),
    country: new FormControl({ value: '', disabled: true }, [Validators.required]),
  })

  ngOnInit() {
    this.countries$.subscribe((countries) => this.countries = countries)

    this.formData$.subscribe((formData) => {
      if (formData?.idNumber) this.formGroup.setValue(formData)
      else this.goBack()
    })
  }

  goBack() {
    this.router.navigate(['/'])
  }
}
