import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {  }

  public getAllUser(){
    return this.http.get('/api/users');
  }
  getById(id){
    return this.http.get(`/api/users/${id}`)
  }
  public addUser(value){
    return this.http.post('/api/users', {...value})
  }
  updateUser(id,value){
    return this.http.put(`/api/users/${id}`,{...value})
  }
  deleteUser(id){
    return this.http.delete(`/api/users/${id}`)
  }
}
