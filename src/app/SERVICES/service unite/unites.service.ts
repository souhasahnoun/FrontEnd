import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unite } from 'src/app/CLASSES/unite';

@Injectable({
  providedIn: 'root'
})
export class UnitesService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/unites')
     ;
  }
// ajouter
  ajouter(unite: Unite){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/unites', unite, {headers: headers});
  }

  
// modifier
  modifier(unite){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/unites/' + unite.id, unite, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/unites/'+ id);
}
}
