import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    // Simulando uma chamada HTTP para registrar um usuário
    return new Observable((observer) => {
      setTimeout(() => {
        if (userData.email && userData.password) {
          observer.next({ success: true, message: 'User registered successfully!' });
          observer.complete();
        } else {
          observer.error({ success: false, message: 'Invalid registration data.' });
        }
      }, 1000);
    });
  }

  public peopleRegister(userData: any): Observable<any> {
    return this.http.post('/api/people', userData);
  }

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>('/api/people');
  }
}
