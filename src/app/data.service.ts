import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DataService {
private goals = new BehaviorSubject<any>(['this is first goal']);
goal=this.goals.asObservable();
 
constructor() { }

  changegoal(goal){
    this.goals.next(goal);
    console.log(this.goals)
  }
}
