import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ordrepaiement } from 'src/app/CLASSES/ordrepaiement';
@Injectable({
  providedIn: 'root'
})
export class OrdrepaiementsService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/ordrePaiements')
     ;
  }
// ajouter
  ajouter(ordrepaiement: Ordrepaiement){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/ordrePaiements', ordrepaiement, {headers: headers});
  }

  
// modifier
  modifier(ordrepaiement){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/ordrePaiements/' + ordrepaiement.id, ordrepaiement, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/ordrePaiements/'+ id);
}
search(b){ 
 


  const params= new HttpParams();
  params.append('date',b.date);
 



  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/ordrePaiements/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
