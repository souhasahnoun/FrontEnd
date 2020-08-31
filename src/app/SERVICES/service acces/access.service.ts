import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Acces } from 'src/app/CLASSES/acces';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  API = 'http://localhost:8000/api';
   
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/access')
     ;
  }
// ajouter
  ajouter(acces: Acces){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/access', acces, {headers: headers});
  }

  
// modifier
  modifier(acces){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/access/' + acces.id, acces, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/access/'+ id);
}

}
