import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Droit } from 'src/app/CLASSES/droit';

@Injectable({
  providedIn: 'root'
})
export class DroitsService {
    API = 'http://localhost:8000/api';
   
    constructor( private httpClient:HttpClient) { }
  // afficher
    liste(){
      return this.httpClient.get(this.API + '/droits')
       ;
    }
  // ajouter
    ajouter(droit: Droit){
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
      return this.httpClient.post(this.API + '/droits', droit, {headers: headers});
    }
  
    
  // modifier
    modifier(droit){
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
      return this.httpClient.put(this.API + '/droits/' + droit.id, droit, {headers: headers});
    }
  
  //supprimer
  supprimer(id){
    return this.httpClient.delete(this.API + '/droits/'+ id);
  }
  
  }
  