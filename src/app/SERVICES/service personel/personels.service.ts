import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personel } from 'src/app/CLASSES/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelsService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/personels')
     ;
  }
// ajouter
  ajouter(personel: Personel){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/personels', personel, {headers: headers});
  }

  
// modifier
  modifier(personel){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/personels/' + personel.id, personel, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/personels/'+ id);
}



}
