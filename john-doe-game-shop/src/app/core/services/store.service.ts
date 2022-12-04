import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  get(key: string): string {
    let item = sessionStorage.getItem(key);
    if (item === null || item === undefined) {
      return '';
    }
    return item;
  }

  set(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  reset(): void {
    sessionStorage.clear();
  }
}
