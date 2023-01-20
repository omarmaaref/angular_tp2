import { Injectable } from '@angular/core';
import { Cv } from 'models/Cv';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HiredService {
  hiredListSubject = new BehaviorSubject<Cv[]>([]);

  constructor() {}

  isAlreadyHired(cv: Cv) {
    const index = this.hiredListSubject.value.findIndex(
      (el) => el.id === cv.id
    );
    return index !== -1;
  }

  hire(cv: Cv) {
    this.hiredListSubject.next([...this.hiredListSubject.value, cv]);
  }

  getHiredListSubject() {
    return this.hiredListSubject;
  }
}
