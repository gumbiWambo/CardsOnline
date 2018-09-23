import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  endpoint = "localhost:3000/languages";
  constructor(private $http: HttpClient) { }
}
