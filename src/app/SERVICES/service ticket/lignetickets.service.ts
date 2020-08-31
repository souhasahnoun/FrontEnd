import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ligneticket } from 'src/app/CLASSES/ligneticket';

@Injectable({
  providedIn: 'root'
})
export class LigneticketsService {


  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/lignetickets')
     ;
  }
// ajouter
  ajouter(ligneticket: Ligneticket){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/lignetickets', ligneticket, {headers: headers});
  }

  
// modifier
  modifier(ligneticket){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/lignetickets/' + ligneticket.id, ligneticket, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/lignetickets/'+ id);
}
}
