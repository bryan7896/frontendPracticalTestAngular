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
}

export const inicialStateGlobal: GlobalState = {
  countries: []
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
      default:
        return reducer(state, action);
    }

  };
}


export const metaReducers: MetaReducer<State>[] = [globalMetaReducer];

