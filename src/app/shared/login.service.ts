import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginViewModel} from '../model/login-view-model';


// import env
import { environment } from '../../environments/environment';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.baseUrl;
  private loginUrl = 'api/authenticate';

  constructor(private httpSrv: HttpClient) { }

  currentUser: string = null;

  // login
  public login(userEntity: LoginViewModel): Observable<any> {
    return this.httpSrv.post<any>(`${this.baseUrl}/${this.loginUrl}`, userEntity, {responseType: 'json'})
    .pipe(map(user => {
      if (user) {
        this.currentUser = user.userName;
      }
      return user;
    }));
  }


  // logout
  public logout(): void {
    this.currentUser = null;
  }
}
