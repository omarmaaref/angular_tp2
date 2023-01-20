import { Injectable } from '@angular/core';
import { Cv } from 'models/Cv';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  listSubject= new BehaviorSubject<Cv[]>(
    [
      new Cv('Sahnoun', 'Dali', 21, '1432423523', 'Student', 'dali.png'),
      new Cv('Baccouche', 'Mooza', 22, '54642542', 'Student', 'motaz.jpeg'),
    ]
  )

  constructor() { }

  getListSubject(){
    return this.listSubject
  }

}
