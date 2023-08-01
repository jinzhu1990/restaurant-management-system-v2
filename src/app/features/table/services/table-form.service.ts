import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableForm } from '@table/models/table-form.model';

@Injectable()
export class TableFormService {
  private readonly fb: FormBuilder = inject(FormBuilder);

  public get tableForm(): FormGroup<TableForm> {
    return this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      body: ['', [Validators.required]],
      tagList: ['', [Validators.required]],
    });
  }
}
