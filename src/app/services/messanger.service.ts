import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject()

  constructor() { }
  sendMsg(product: unknown){
    this.subject.next(product) //Triggering a event
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
