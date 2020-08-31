import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Societe } from 'src/app/CLASSES/societe';


@Injectable({
  providedIn: 'root'
})
export class SocietesService {
  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/societes')
     ;
  }
// ajouter
  ajouter(societe: Societe){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/societes', societe, {headers: headers});
  }

  
// modifier
  modifier(societe){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/societes/' + societe.id, societe, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/societes/'+ id);
}




}
