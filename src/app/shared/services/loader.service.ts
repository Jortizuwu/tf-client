import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: boolean = false;

  constructor() {}

  show(): void {
    this.loading = true;
  }

  hide(): void {
    this.loading = false;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
