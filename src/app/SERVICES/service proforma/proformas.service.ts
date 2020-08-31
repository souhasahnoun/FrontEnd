import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proforma } from 'src/app/CLASSES/proforma';

@Injectable({
  providedIn: 'root'
})
export class ProformasService {
  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/proformas')
     ;
  }
// ajouter
  ajouter(proformas: Proforma){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/proformas', proformas, {headers: headers});
  }

  
// modifier
  modifier(proformas){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/proformas/' + proformas.id, proformas, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/proformas/'+ id);
}
}
