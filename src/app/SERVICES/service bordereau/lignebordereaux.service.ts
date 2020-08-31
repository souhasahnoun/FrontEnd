import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lignebordereau } from 'src/app/CLASSES/lignebordereau';

@Injectable({
  providedIn: 'root'
})
export class LignebordereauxService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/lignebordereaux')
     ;
  }
// ajouter
  ajouter(bordereau: Lignebordereau){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/lignebordereaux', bordereau, {headers: headers});
  }

  
// modifier
  modifier(bordereau){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/lignebordereaux/' + bordereau.id, bordereau, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/lignebordereaux/'+ id);
}
}
