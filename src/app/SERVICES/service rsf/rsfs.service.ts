import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Rsf } from 'src/app/CLASSES/rsf';

@Injectable({
  providedIn: 'root'
})
export class RsfsService {
  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/rsfs')
     ;
  }
// ajouter
  ajouter(rsf: Rsf){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/rsfs', rsf, {headers: headers});
  }

  
// modifier
  modifier(rsf){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/rsfs/' + rsf.id, rsf, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/rsfs/'+ id);
}

search(b){ 
 


  const params= new HttpParams();
  params.append('fournisseur_id',b.fournisseur_id);
  params.append('date',b.date);

  


  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/rsfs/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
