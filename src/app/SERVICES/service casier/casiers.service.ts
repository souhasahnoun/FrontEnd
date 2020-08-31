import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Casier } from 'src/app/CLASSES/casier';

@Injectable({
  providedIn: 'root'
})
export class CasiersService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/casiers')
     ;
  }
// ajouter
  ajouter(casier: Casier){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/casiers', casier, {headers: headers});
  }

  
// modifier
  modifier(casier){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/casiers/' + casier.id, casier, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/casiers/'+ id);
}
}

