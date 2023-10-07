import { Injectable } from '@angular/core';

const TOKEN_KEY: string = 'AuthToken';
const REFRESH_TOKEN_KEY: string = 'RefreshAuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout() {
    localStorage.clear();
  }

  get Token(){
    var token = localStorage.getItem(TOKEN_KEY);
    if(token) return token;
    else return "";
  }

  get RefreshToken(){
    var token = localStorage.getItem(REFRESH_TOKEN_KEY);
    if(token) return token;
    else return "";
  }

  set Token(token: string){
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  set RefreshToken(token: string){
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  get loggedIn(): boolean {
    return !!this.Token;
  }

}
