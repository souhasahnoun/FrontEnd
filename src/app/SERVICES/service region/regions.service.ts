import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Region } from 'src/app/CLASSES/region';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  API = 'http://localhost:8000/api';
 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/regions')
     ;
  }
// ajouter
  ajouter(region: Region){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/regions', region, {headers: headers});
  }

  
// modifier
  modifier(region){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/regions/' + region.id, region, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/regions/'+ id);
}

}
