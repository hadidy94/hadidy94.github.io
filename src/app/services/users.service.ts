import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {  }

  public getAllUser(){
    return this.http.get('https://my-json-server.typicode.com/hadidy94/db/users');
  }
  getById(id){
    return this.http.get(`https://my-json-server.typicode.com/hadidy94/db/users/${id}`)
  }
  public addUser(value){
    return this.http.post('https://my-json-server.typicode.com/hadidy94/db/users', {...value})
  }
  updateUser(id,value){
    return this.http.put(`https://my-json-server.typicode.com/hadidy94/db/users/${id}`,{...value})
  }
  deleteUser(id){
    return this.http.delete(`https://my-json-server.typicode.com/hadidy94/db/users/${id}`)
  }
}
