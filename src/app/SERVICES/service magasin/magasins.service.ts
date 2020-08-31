import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Magasin } from 'src/app/CLASSES/magasin';
import { Region } from 'src/app/CLASSES/region';
@Injectable({
  providedIn: 'root'
})
export class MagasinsService {
  
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/magasins')
     ;
  }
// ajouter
  ajouter(magasin: Magasin){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/magasins', magasin, {headers: headers});
  }

  
// modifier
  modifier(magasin){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/magasins/' + magasin.id, magasin, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/magasins/'+ id);
}


}

