import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Souche } from 'src/app/CLASSES/souche';

@Injectable({
  providedIn: 'root'
})
export class SouchesService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/souches')
     ;
  }
// ajouter
  ajouter(souche: Souche){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/souches', souche, {headers: headers});
  }

  
// modifier
  modifier(souche){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/souches/' + souche.id, souche, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/souches/'+ id);
}

archiver(souche){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/souches/' +  souche.id +"/archiver", {headers: headers});
}
desarchiver(souche){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/souches/' +  souche.id +"/desarchiver", {headers: headers});
}


}

