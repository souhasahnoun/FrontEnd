import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from 'src/app/CLASSES/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/utilisateurs')
     ;
  }
// ajouter
  ajouter(utilisateur: Utilisateur){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/utilisateurs', utilisateur, {headers: headers});
  }

  
// modifier
  modifier(utilisateur){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/utilisateurs/' + utilisateur.id, utilisateur, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/utilisateurs/'+ id);
}


}
