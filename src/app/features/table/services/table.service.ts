import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Table } from '@core/models/table.model';
import { Observable, map, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TableService {
  private mockData: Table[] = [{
    id: '1',
    location: 'Table 1',
    sit: 4,
    reserved: true,
  }, {
    id: '2',
    location: 'Table 2',
    sit: 6,
    reserved: false,
  }, {
    id: '3',
    location: 'Table 3',
    sit: 8,
    reserved: false,
  }, {
    id: '4',
    location: 'Table 4',
    sit: 4,
    reserved: true,
  }, {
    id: '5',
    location: 'Table 5',
    sit: 4,
    reserved: false,
  }, {
    id: '6',
    location: 'Table 6',
    sit: 8,
    reserved: true,
  }, {
    id: '7',
    location: 'Table 7',
    sit: 10,
    reserved: false,
  }, {
    id: '8',
    location: 'Table 8',
    sit: 6,
    reserved: false,
  }, {
    id: '9',
    location: 'Table 9',
    sit: 2,
    reserved: false,
  }, {
    id: '10',
    location: 'Table 10',
    sit: 4,
    reserved: true,
  }, {
    id: '11',
    location: 'Table 11',
    sit: 2,
    reserved: true,
  }, {
    id: '12',
    location: 'Table 12',
    sit: 4,
    reserved: false,
  }]

  public loadTable$(): Observable<Table[]> {
    return of(this.mockData);
  }

  public reserve$(id: string): Observable<Table[]> {
    this.mockData = this.mockData.map((item: Table) =>
      item.id === id ? { ...item, reserved: !item.reserved } : item);

    return of(this.mockData);
  }
}
