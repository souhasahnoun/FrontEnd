import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Reception } from 'src/app/CLASSES/reception';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsService {

  API = 'http://localhost:8000/api';
 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/receptions')
     ;
  }
// ajouter
  ajouter(reception: Reception){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/receptions', reception, {headers: headers});
  }

  
// modifier
  modifier(reception){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/receptions/' + reception.id, reception, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/receptions/'+ id);
}
search(b){ 
 


  const params= new HttpParams();

  params.append('date',b.date);
  params.append('casier_id',b.casier_id);
  params.append('affect',b.affect);





  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/receptions/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
