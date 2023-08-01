import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Table } from '@core/models/table.model';
import { Store } from '@ngrx/store';
import { TagListComponent } from '@shared/components/tag-list/tag-list.component';
import { TableActions, TableSelectors } from '@store/table';
import { Observable, combineLatestWith, filter, map } from 'rxjs';

const TableImports: Array<any> = [CommonModule, RouterLink, MatProgressSpinnerModule, TagListComponent, MatDialogModule, MatButtonModule];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: TableImports,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TableComponent implements OnInit {
  private readonly store: Store = inject(Store);
  private readonly dialog: MatDialog = inject(MatDialog);

  public readonly error$: Observable<string | null> = this.store.select(TableSelectors.error);
  public readonly isLoading$: Observable<boolean> = this.store.select(TableSelectors.isLoading);
  public readonly table$: Observable<Table | null> = this.store.select(TableSelectors.table);

  private readonly slug: string = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';

  public ngOnInit(): void {
    this.store.dispatch(TableActions.getTable());
  }
}
