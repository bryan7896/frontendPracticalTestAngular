import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCountry, setFormData } from 'src/app/config/global.action';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {


  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  private countries$: Observable<any> = this.store.select(state => state.countries);
  countries: any;

  formGroup: FormGroup = new FormGroup({
    idNumber: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\d{8,11}$/)
    ]),
    typeId: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    this.store.dispatch(new getCountry());
    this.countries$.subscribe((countries) => this.countries = countries)
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.store.dispatch(new setFormData({ formData: this.formGroup.value }));
      this.router.navigate(['/secondPage'])
    }
  }

}
