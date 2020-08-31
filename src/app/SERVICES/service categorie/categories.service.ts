import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Categorie } from 'src/app/CLASSES/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/categories')
     ;
  }
// ajouter
  ajouter(categorie: Categorie){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/categories', categorie, {headers: headers});
  }

  
// modifier
  modifier(categorie){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/categories/' + categorie.id, categorie, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/categories/'+ id);
}
archiver(categorie){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/categories/' +  categorie.id +"/archiver", {headers: headers});
}
desarchiver(categorie){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/categories/' +  categorie.id +"/desarchiver", {headers: headers});
}
search(b){ 
 

  console.log('etat:'+b.etat);
   const params= new HttpParams();
   params.append('etat',b.etat);
  
  
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/categories/search',{params: params,headers:headers });  
  
  
  return data;
  
  }
}
