import { Routes } from '@angular/router';
import { Route } from '@core/enums/route.enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@table/components/table-list/table-list.component'),
  },
];
