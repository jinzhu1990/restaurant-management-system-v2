import { Table } from '@core/models/table.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKey, State as TableState } from '@store/table/reducer';

const selectTableState = createFeatureSelector<TableState>(FeatureKey);

export const isLoading = createSelector(selectTableState, ({ isLoading }: TableState): boolean => isLoading);
export const error = createSelector(selectTableState, ({ error }: TableState): string | null => error);
export const table = createSelector(selectTableState, state => state.table);