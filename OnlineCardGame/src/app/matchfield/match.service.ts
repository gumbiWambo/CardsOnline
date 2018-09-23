import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private $http: HttpClient) { }
}
