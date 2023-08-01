import { Table } from '@core/models/table.model';
import { BackendErrors } from '@core/models/backend-errors.model';
import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { TableActions } from '@store/table';

export const FeatureKey = 'table';

export interface State {
  isLoading: boolean;
  error: string | null;
  table: Table[] | null;
  createTableErrors: BackendErrors | null;
  isCreateTableSubmitting: boolean;
}

const initialState: State = {
  isLoading: false,
  error: null,
  table: [],
  createTableErrors: null,
  isCreateTableSubmitting: false,
};

export const reducer = createReducer(
  initialState,

  on(TableActions.getTable, (state): State => {
    return { ...state, isLoading: true };
  }),
  on(TableActions.getTableSuccess, (state, { table }): State => {
    return {
      ...state, isLoading: false, table
    };
  }),
  on(TableActions.getTableFailure, (state): State => {
    return { ...state, isLoading: false };
  }),

  on(TableActions.reserveTable, (state): State => {
    return { ...state, isLoading: true };
  }),
  on(TableActions.reserveTableSuccess, (state, { table }): State => {
    return {
      ...state, isLoading: false, table
    };
  }),
  on(TableActions.reserveTableFailure, (state): State => {
    return { ...state, isLoading: false };
  }),

  on(routerNavigatedAction, () => initialState)
);
