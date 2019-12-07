import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url: string = environment.serverUrl;
  private b64pad = "=";
  private b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜabcdefghijklmnopqrstuvwxyzäöü0123456789+/";
  constructor(private http: HttpClient) {
  }
  async login(username: string, password: string) {
    const key: any = await this.getLoginKey();
    return this.http.put<string>(this.url + '/login', {username, password: this.b64tohex(password), key}, {}).pipe(pluck('message')).toPromise();
  }

  async register(username: string, email: string, password: string): Promise<any>{
    const key: any = await this.getRegisterKey();
    const user = {username, email, password: this.b64tohex(password), key: key.key};
    return this.http.put(this.url + '/register', user, {}).toPromise();
  }
  private getRegisterKey() {
    return this.http.get(this.url + '/register').toPromise();
  }
  private getLoginKey() {
    return this.http.get(this.url + '/login').toPromise()
  }
  private b64tohex(s: string) {
    // s.toLocaleLowerCase();
    let ret = "";
    let i;
    let k = 0; // b64 state, 0-3
    let slop;
    for(i = 0; i < s.length; ++i) {
        if(s.charAt(i) === this.b64pad) break;
        let v = this.b64map.indexOf(s.charAt(i));
        if(v < 0) continue;
        if(k === 0) {
            ret += String.fromCharCode(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if(k === 1) {
            ret += String.fromCharCode((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if(k === 2) {
            ret += String.fromCharCode(slop);
            ret += String.fromCharCode(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += String.fromCharCode((slop << 2) | (v >> 4));
            ret += String.fromCharCode(v & 0xf);
            k = 0;
        }
    }
    if(k === 1)
        ret += String.fromCharCode(slop << 2);
    return ret.replace(/\0/g, '');
    // return ret;
}
}
