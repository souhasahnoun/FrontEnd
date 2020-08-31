import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Famille } from 'src/app/CLASSES/famille';

@Injectable({
  providedIn: 'root'
})
export class FamillesService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/familles')
     ;
  }
// ajouter
  ajouter(famille: Famille){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/familles', famille, {headers: headers});
  }

  
// modifier
  modifier(famille){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/familles/' + famille.id, famille, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/familles/'+ id);
}
archiver(famille){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/familles/' +  famille.id +"/archiver", {headers: headers});
}
desarchiver(famille){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/familles/' +  famille.id +"/desarchiver", {headers: headers});
}

search(b){ 
 

  console.log('etat:'+b.etat);
   const params= new HttpParams();
   params.append('etat',b.etat);
  
  
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/familles/search',{params: params,headers:headers });  
  
  
  return data;
  
  }
}
