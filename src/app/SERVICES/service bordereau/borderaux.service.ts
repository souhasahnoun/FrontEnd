import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Bordereaux } from 'src/app/CLASSES/bordereaux';

@Injectable({
  providedIn: 'root'
})
export class BorderauxService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/bordereaux')
     ;
  }
// ajouter
  ajouter(bordereau: Bordereaux){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/bordereaux', bordereau, {headers: headers});
  }

  
// modifier
  modifier(bordereau){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/bordereaux/' + bordereau.id, bordereau, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/bordereaux/'+ id);
}
search(b){ 
 


  const params= new HttpParams();
  params.append('banque_id',b.	banque_id);
  params.append('date',b.date);
 



  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/bordereaux/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
