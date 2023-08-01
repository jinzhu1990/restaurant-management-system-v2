import { InjectionToken } from '@angular/core';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromTable from '@store/table';

export interface AppState {
  router: RouterState;
  [fromTable.FeatureKey]: fromTable.State;
}

export const ROOT_REDUCER_TOKEN = 'Root reducers';

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState>>(ROOT_REDUCER_TOKEN, {
  factory: (): ActionReducerMap<AppState, Action> => ({
    router: routerReducer,
    [fromTable.FeatureKey]: fromTable.reducer,
  }),
});
