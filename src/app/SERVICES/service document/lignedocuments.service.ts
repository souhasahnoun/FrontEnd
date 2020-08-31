import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lignedocument } from 'src/app/CLASSES/lignedocument';

@Injectable({
  providedIn: 'root'
})
export class LignedocumentsService {
  API = 'http://localhost:8000/api';
   
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/lignedocuments')
     ;
  }
// ajouter
  ajouter(lignedocument: Lignedocument){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/lignedocuments', lignedocument, {headers: headers});
  }

  
// modifier
  modifier(lignedocument){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/lignedocuments/' + lignedocument.id, lignedocument, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/lignedocuments/'+ id);
}
}
