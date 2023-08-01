import { Injectable } from '@angular/core'; // Import Injectable
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SnackbarService } from '@shared/components/snackbar/services/snackbar.service';
import { TableService } from '@table/services/table.service';
import { Table } from '@core/models/table.model';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import * as TableActions from '@store/table/actions'; // Import TableActions

@Injectable() // Add the Injectable decorator
export class TableEffects {
  constructor(
    private actions$: Actions,
    private tableService: TableService,
    private snackbar: SnackbarService
  ) { }

  getTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActions.getTable),
      exhaustMap(() =>
        this.tableService.loadTable$().pipe(
          map((table: Table[]) => TableActions.getTableSuccess({ table })),
          catchError(() => {
            this.snackbar.openSnackbar({ message: 'GetTablesError', type: 'error' });
            return of(TableActions.getTableFailure());
          })
        )
      )
    )
  );

  reserveTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActions.reserveTable),
      exhaustMap((action) => {
        const id: string = action.id;
        return this.tableService.reserve$(id).pipe(
          map((table: Table[]) => TableActions.getTableSuccess({ table })),
          catchError(() => {
            this.snackbar.openSnackbar({ message: 'ReserveTableError', type: 'error' });
            return of(TableActions.getTableFailure());
          })
        );
      })
    )
  );

}
