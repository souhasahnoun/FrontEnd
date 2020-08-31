import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Banque } from 'src/app/CLASSES/banque';
@Injectable({
  providedIn: 'root'
})
export class BanquesService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/banques')
     ;
  }
// ajouter
  ajouter(banque: Banque){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/banques', banque, {headers: headers});
  }

  
// modifier
  modifier(banque){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/banques/' + banque.id, banque, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/banques/'+ id);
}

}
