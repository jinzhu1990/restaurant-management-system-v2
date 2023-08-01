import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const TableContainerImports: Array<any> = [RouterOutlet];

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: TableContainerImports,
  template: `
    <section class="container-max-w-sm">
      <router-outlet />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TableViewComponent { }
