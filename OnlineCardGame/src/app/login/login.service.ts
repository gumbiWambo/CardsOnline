import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
import { BehaviorSubject, Subscription } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  Subscriptions: Subscription[] = [];
  constructor(private $http: HttpClient) { }
}
