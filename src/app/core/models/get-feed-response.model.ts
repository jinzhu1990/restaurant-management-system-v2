import { Table } from '@core/models/table.model';

export interface GetFeedResponse {
  tables: Table[];
  tablesCount: number;
}
