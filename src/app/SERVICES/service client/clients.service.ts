import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/CLASSES/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/clients')
     ;
  }
// ajouter
  ajouter(client: Client){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/clients', client, {headers: headers});
  }

  
// modifier
  modifier(client){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/clients/' + client.id, client, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/clients/'+ id);
}
archiver(client){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/clients/' +  client.id +"/archiver", {headers: headers});
}
desarchiver(client){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/clients/' +  client.id +"/desarchiver", {headers: headers});
}
}
