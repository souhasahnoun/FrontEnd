import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Code } from 'src/app/CLASSES/code';

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/codes')
     ;
  }
// ajouter
  ajouter(code: Code){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/codes', code, {headers: headers});
  }

  
// modifier
  modifier(code){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/codes/' + code.id, code, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/codes/'+ id);
}
}

