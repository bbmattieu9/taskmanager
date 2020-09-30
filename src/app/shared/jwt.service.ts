import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  destroyToken(): void {
    localStorage.removeItem('jwtToken');
  }

}
