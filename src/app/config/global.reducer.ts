import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ActionTypes, actions } from './global.action';
import { environment } from '../../environments/environment';



export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export interface GlobalState {
  countries: Array<any>;
  formData: Object;
}

export const inicialStateGlobal: GlobalState = {
  countries: [],
  formData: {}
};

export function globalReducer(state: GlobalState = inicialStateGlobal, action: actions): GlobalState {
  return state;
}

export function globalMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: State, action: any) {
    switch (action.type) {
      case ActionTypes.setCountry:
        return {
          ...state,
          countries: action.payload.countries
        };
      case ActionTypes.setFormData:
        return {
          ...state,
          formData: action.payload.formData
        };
      default:
        return reducer(state, action);
    }

  };
}


export const metaReducers: MetaReducer<State>[] = [globalMetaReducer];

