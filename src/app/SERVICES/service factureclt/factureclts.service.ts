import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factureclts } from 'src/app/CLASSES/factureclts';

@Injectable({
  providedIn: 'root'
})
export class FacturecltsService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/factureclts')
     ;
  }
// ajouter
  ajouter(factureclts: Factureclts){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/factureclts', factureclts, {headers: headers});
  }

  
// modifier
  modifier(code){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/factureclts/' + factureclts.id, factureclts, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/factureclts/'+ id);
}
}
