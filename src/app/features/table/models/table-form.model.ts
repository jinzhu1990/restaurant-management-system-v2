import { FormControl } from '@angular/forms';

export interface TableForm {
  title: FormControl<string>;
  description: FormControl<string>;
  body: FormControl<string>;
  tagList: FormControl<string>;
}
