import { TableFormMode } from '@table/enums/table-form-mode.enum';
import { TablePayload } from '@table/models/table-payload.model';

export interface TableFormData {
  mode: TableFormMode;
  formValues: TablePayload;
}
