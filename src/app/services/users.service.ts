import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeUser } from '../models/userData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>('http://localhost:3000/data');
  }
}
