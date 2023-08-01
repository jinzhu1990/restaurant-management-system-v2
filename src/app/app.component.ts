import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LayoutComponent } from '@ui/layout/layout.component';
import { EffectsModule } from '@ngrx/effects';
import { TableEffects } from '@store/table/effects';

const AppImports: Array<any> = [CommonModule, RouterOutlet, MatButtonModule, LayoutComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: AppImports,
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppComponent implements OnInit {
  private readonly store: Store = inject(Store);

  public ngOnInit(): void {
  }
}
