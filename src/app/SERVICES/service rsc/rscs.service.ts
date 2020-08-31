import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Rsc } from 'src/app/CLASSES/rsc';

@Injectable({
  providedIn: 'root'
})
export class RscsService {
  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/rscs')
     ;
  }
// ajouter
  ajouter(rsc: Rsc){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/rscs', rsc, {headers: headers});
  }

  
// modifier
  modifier(rsc){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/rscs/' + rsc.id, rsc, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/rscs/'+ id);
}

search(b){ 
 


  const params= new HttpParams();
  params.append('	client_id',b.	client_id);
  params.append('date',b.date);

  


  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/rscs/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
