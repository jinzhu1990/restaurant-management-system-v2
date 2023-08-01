import { Table } from '@core/models/table.model';
import { createAction, props } from '@ngrx/store';

export const getTable = createAction('[Table] Get table');
export const getTableSuccess = createAction('[Table] Get table success', props<{ table: Table[] }>());
export const getTableFailure = createAction('[Table] Get table failure');

export const reserveTable = createAction('[Table] Reserve table', props<{ id: string }>());
export const reserveTableSuccess = createAction('[Table] Reserve table success', props<{ table: Table[] }>());
export const reserveTableFailure = createAction('[Table] Reserve table failure');