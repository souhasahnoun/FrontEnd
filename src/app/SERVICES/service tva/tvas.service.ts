import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tva } from 'src/app/CLASSES/tva';

@Injectable({
  providedIn: 'root'
})
export class TvasService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/tvas')
     ;
  }
// ajouter
  ajouter(tva: Tva){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/tvas', tva, {headers: headers});
  }

  
// modifier
  modifier(tva){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/tvas/' + tva.id, tva, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/tvas/'+ id);
}

}
