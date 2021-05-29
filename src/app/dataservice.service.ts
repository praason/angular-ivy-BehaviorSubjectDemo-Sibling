import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataserviceService {
  constructor() {}

  private nameDataSubject = new BehaviorSubject(null);

  sendData(name: string) {
    this.nameDataSubject.next(name);
  }

  getData() {
    return this.nameDataSubject.asObservable();
  }
}
