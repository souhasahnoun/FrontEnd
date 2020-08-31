import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BLClts } from 'src/app/CLASSES/BL_Clts';

@Injectable({
  providedIn: 'root'
})
export class BlcltsService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/blclts')
     ;
  }
// ajouter
  ajouter(blclts: BLClts){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/blclts', blclts, {headers: headers});
  }

  
// modifier
  modifier(blclts){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/blclts/' + blclts.id, blclts, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/blclts/'+ id);
}
}
