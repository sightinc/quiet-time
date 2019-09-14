import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userUrl = 'http://localhost:8080/api/user '; 

  constructor(
    private http: HttpClient
  ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  getUser(id: string): Observable<User> {
    const url = `$(this.userUrl)/${id}`;
    return this.http.get<User>(url);
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  deleteUser ( user: User | string ): Observable<User> {
    const id = typeof user == 'string' ? user : user._id;
    const url = `$(this.userUrl)/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updaateUser (user: User ): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }
}
