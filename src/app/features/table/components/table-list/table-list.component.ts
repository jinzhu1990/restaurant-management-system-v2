import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { Table } from '@table/models/table.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TableActions, TableSelectors } from '@store/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-list-form',
  standalone: true,
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
})

export default class TableListComponent implements OnInit {

  private readonly store: Store = inject(Store);
  public readonly tableData$: Observable<Table[] | null> = this.store.select(TableSelectors.table);

  public ngOnInit(): void {
    this.store.dispatch(TableActions.getTable());
  }

  public reserve(id: string): void {
    this.store.dispatch(TableActions.reserveTable({ id }));
  }
}
