import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor() { }
  
  public static title: BehaviorSubject<string> = new BehaviorSubject<string>('')

}
