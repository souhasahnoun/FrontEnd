import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Document} from 'src/app/CLASSES/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  API = 'http://localhost:8000/api';
   
    constructor( private httpClient:HttpClient) { }
  // afficher
    liste(){
      return this.httpClient.get(this.API + '/documents')
       ;
    }
  // ajouter
    ajouter(document: Document){
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
      console.log('Ajout document'+document);
      return this.httpClient.post(this.API + '/documents', document, {headers: headers});
    }
  
    
  // modifier
    modifier(document){
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
      return this.httpClient.put(this.API + '/documents/' + document.id, document, {headers: headers});
    }
  
  //supprimer
  supprimer(id){
    return this.httpClient.delete(this.API + '/documents/'+ id);
  }
  archiver(document){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/documents/' +  document.id +"/archiver", {headers: headers});
  }
  desarchiver(document){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/documents/' +  document.id +"/desarchiver", {headers: headers});
  }
  search(b){ 
 


     const params= new HttpParams();
     params.append('num',b.num);
     params.append('etat_rs',b.etat_rs);
     params.append('fournisseur_id',b.fournisseur_id);
     params.append('date',b.date);
     params.append('date_prev',b.date_prev);
     params.append('date_fin',b.date_fin);
     params.append('etat_pay',b.etat_pay);
     params.append('login',b.login);
     params.append('etat',b.etat);
     params.append('rs',b.rs);

     const headers = new HttpHeaders();
     headers.set('Content-Type', 'application/json; charset=utf-8');
    
    //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
    let data=this.httpClient.get(this.API + '/documents/search',{params: params,headers:headers });  
    
    
    return data;
    
    }
    imprimer(b){ 
 


      const params= new HttpParams();
      params.append('date',b.date);
      params.append('date_fin',b.date_fin);
      params.append('etat_pay',b.etat_pay);
      params.append('client_id',b.client_id);
   
   
 
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
     
     //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
     let data=this.httpClient.get(this.API + '/documents/imprimer',{params: params,headers:headers });  
     
     
     return data;
     
     }
}
