import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracabilitestock } from 'src/app/CLASSES/tracabilitestock';

@Injectable({
  providedIn: 'root'
})
export class TracabilitestocksService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/tracabilitestocks')
     ;
  }
// ajouter
  ajouter(tracabilitestock: Tracabilitestock){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/tracabilitestocks', tracabilitestock, {headers: headers});
  }

  
// modifier
  modifier(tracabilitestock){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/tracabilitestocks/' + tracabilitestock.id, tracabilitestock, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/tracabilitestocks/'+ id);
}

}
