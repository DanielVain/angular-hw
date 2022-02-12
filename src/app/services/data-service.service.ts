import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  names: string[];
  name: string[];
  constructor() {
    this.names = ['Kenny', 'Moshe', 'Shlomo', 'Ben', 'Shmuel', 'Moshe'];
  }
  findName(name: string): string[] {
    this.name = this.names.filter((item) => name == item);
    return this.name;
  }
}
