import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DestroyComponent } from '@core/abstracts/destroy/destroy.component';
import { BaseDialogConfig } from '@core/constants/base-dialog.config';
import { ConfirmationDialogData } from '@core/models/confirmation-dialog-data.model';
import { Store } from '@ngrx/store';
import { ConfirmationDialogComponent } from '@shared/components/confirmation-dialog/confirmation-dialog.component';
import { Observable, takeUntil } from 'rxjs';

const TopBarImports: Array<any> = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  RouterModule,
  MatRippleModule,
  MatButtonModule,
  MatDialogModule,
];
const TopBarProviders: Array<any> = [MatDialog];

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: TopBarImports,
  providers: TopBarProviders,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent extends DestroyComponent {
  private readonly store: Store = inject(Store);
  private readonly dialog: MatDialog = inject(MatDialog);
}
