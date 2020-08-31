import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tracabilite } from 'src/app/CLASSES/tracabilite';

@Injectable({
  providedIn: 'root'
})
export class TracabilitesService {
  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/tracabilites')
     ;
  }
// ajouter
  ajouter(tracabilite: Tracabilite){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/tracabilites', tracabilite, {headers: headers});
  }

  
// modifier
  modifier(tracabilite){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/tracabilites/' + tracabilite.id, tracabilite, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/tracabilites/'+ id);
}
search(b){ 
 


  const params= new HttpParams();

  params.append('	login',b.login);
  params.append('objet',b.objet);
  params.append('date',b.date);





  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/tracabilites/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}

