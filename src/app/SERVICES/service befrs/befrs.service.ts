import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BEFrs } from 'src/app/CLASSES/BE_Frs';

@Injectable({
  providedIn: 'root'
})
export class BefrsService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/befrs')
     ;
  }
// ajouter
  ajouter(befrs: BEFrs){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/befrs', befrs, {headers: headers});
  }

  
// modifier
  modifier(befrs){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/befrs/' + befrs.id, befrs, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/befrs/'+ id);
}
}
