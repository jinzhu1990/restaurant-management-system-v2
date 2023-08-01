import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="text-center">Angular 16 Project</div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent { }
