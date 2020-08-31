import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BCClts } from 'src/app/CLASSES/BC_Clts';

@Injectable({
  providedIn: 'root'
})
export class BccltsService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/bcclts')
     ;
  }
// ajouter
  ajouter(bcclts: BCClts){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/bcclts', bcclts, {headers: headers});
  }

  
// modifier
  modifier(bcclts){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/bcclts/' + bcclts.id, bcclts, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/bcclts/'+ id);
}
}
