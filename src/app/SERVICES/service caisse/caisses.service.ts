import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Caisse } from 'src/app/CLASSES/caisse';

@Injectable({
  providedIn: 'root'
})
export class CaissesService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/caisses')
     ;
  }
// ajouter
  ajouter(caisse: Caisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/caisses', caisse, {headers: headers});
  }

  
// modifier
  modifier(caisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/caisses/' + caisse.id, caisse, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/caisses/'+ id);
}

search(b){ 
 

  console.log('login:'+b.login);
   const params= new HttpParams();
   params.append('login',b.login);
   params.append('date',b.date);
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/caisses/search',{params: params,headers:headers });  
  
  
  return data;
  
  }
}

