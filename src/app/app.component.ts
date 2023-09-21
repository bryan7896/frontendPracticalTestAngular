import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCountry } from './config/global.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>,
  ) { }

  state$: Observable<any> = this.store.select(state => state);
  state: any;

  ngOnInit() {
    console.log('hola')
    this.store.dispatch(new setCountry({ countries: [{ text: 'hola' }] }));

    this.state$.subscribe((state) => {
      console.log('---state---', state)
    })
  }
}
