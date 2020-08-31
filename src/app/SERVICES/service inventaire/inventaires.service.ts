import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inventaire } from 'src/app/CLASSES/inventaire';

@Injectable({
  providedIn: 'root'
})
export class InventairesService {

   API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/inventaires')
     ;
  }
// ajouter
  ajouter(inventaire: Inventaire){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/inventaires', inventaire, {headers: headers});
  }

  
// modifier
  modifier(inventaire){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/inventaires/' + inventaire.id, inventaire, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/inventaires/'+ id);
}
search(b){ 
 


  const params= new HttpParams();
  params.append('produit_id',b.produit_id);



  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/inventaires/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
