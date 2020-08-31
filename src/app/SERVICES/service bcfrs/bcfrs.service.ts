import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BCFrs } from 'src/app/CLASSES/BC_Frs';

@Injectable({
  providedIn: 'root'
})
export class BcfrsService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/bcfrs')
     ;
  }
// ajouter
  ajouter(bcfrs: BCFrs){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/bcfrs', bcfrs, {headers: headers});
  }

  
// modifier
  modifier(bcfrs){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/bcfrs/' + bcfrs.id, bcfrs, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/bcfrs/'+ id);
}
}
