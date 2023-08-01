import { Profile } from '@core/models/profile.model';

export interface Table {
  id: string;
  location: string;
  sit: number;
  reserved: boolean;
}
