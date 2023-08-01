import { TableRequest } from '@table/models/table-request.model';
import { Table } from '@core/models/table.model';

export const getTable = (response: TableRequest): Table => {
  return response.table;
};
