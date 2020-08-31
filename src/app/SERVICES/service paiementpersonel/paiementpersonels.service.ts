import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Paiementpersonel } from 'src/app/CLASSES/paiementpersonel';

@Injectable({
  providedIn: 'root'
})
export class PaiementpersonelsService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/paiementpersonels')
     ;
  }
// ajouter
  ajouter(paiementpersonel: Paiementpersonel){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/paiementpersonels', paiementpersonel, {headers: headers});
  }

  
// modifier
  modifier(paiementpersonel){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/paiementpersonels/' + paiementpersonel.id, paiementpersonel, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/paiementpersonels/'+ id);
}

search(b){ 
 


  const params= new HttpParams();
  params.append('	personnel_id',b.	personnel_id);
  params.append('	date',b.	date);
 
  


  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/paiementpersonels/search',{params: params,headers:headers });  
 
 
 return data;
 
 }

}