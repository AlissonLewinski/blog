import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  hasSecret: BehaviorSubject<boolean> = new BehaviorSubject<boolean>('luc_secret' in localStorage)

  constructor() { }
}
