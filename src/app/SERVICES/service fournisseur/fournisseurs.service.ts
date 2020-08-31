import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fournisseur } from 'src/app/CLASSES/fournisseur';


@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/fournisseurs')
     ;
  }
// ajouter
  ajouter(fournisseur: Fournisseur){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/fournisseurs', fournisseur, {headers: headers});
  }

  
// modifier
  modifier(fournisseur){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/fournisseurs/' + fournisseur.id, fournisseur, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/fournisseurs/'+ id);
}

archiver(fournisseur){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/fournisseurs/' +  fournisseur.id +"/archiver", {headers: headers});
}
desarchiver(fournisseur){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/fournisseurs/' +  fournisseur.id +"/desarchiver", {headers: headers});
}


}
