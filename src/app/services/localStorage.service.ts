import { Injectable } from '@angular/core';
import { storageAvailable } from '@utils/storageAvailable';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly storage: Storage;

  constructor() {
    if (storageAvailable('localStorage')) {
      this.storage = window.localStorage;
    }
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
