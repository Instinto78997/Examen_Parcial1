import { Injectable } from '@angular/core';
import { of } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Login(username: string, password: string) {
    if (username === 'admin' && password === '1234') {
      return of({ success: true});
    }
    return of({ success: false });
  }

}
