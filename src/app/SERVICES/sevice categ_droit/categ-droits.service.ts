import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Droit } from 'src/app/CLASSES/droit';
import { CategDroit } from 'src/app/CLASSES/categ_droit';

@Injectable({
  providedIn: 'root'
})
export class CategDroitsService {

  API = 'http://localhost:8000/api';
   
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/categ_droits')
     ;
  }
// ajouter
  ajouter(categ_droit: CategDroit){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/categ_droits', categ_droit, {headers: headers});
  }

  
// modifier
  modifier(categ_droit){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/categ_droits/' + categ_droit.id, categ_droit, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/categ_droits/'+ id);
}
}
