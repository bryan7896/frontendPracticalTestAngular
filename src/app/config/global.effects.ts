import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';
import { ApiService } from '../services/api.services';
import { ActionTypes, setCountry } from './global.action';

@Injectable()

export class GeneralEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    //private router: Router,
    private store$: Store,
  ) { }

  getCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getCountry),
      exhaustMap(() => {
        return this.apiService.get().pipe(
          map(response => {
            return new setCountry({ countries: response })
          })
        );
      })
    ), {});
}

export const effects = [
  GeneralEffects,
];