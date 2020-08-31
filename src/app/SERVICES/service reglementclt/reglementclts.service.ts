import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';

@Injectable({
  providedIn: 'root'
})
export class ReglementcltsService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/reglementclts')
     ;
  }
// ajouter
  ajouter(reglementclt: Reglementclt){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/reglementclts', reglementclt, {headers: headers});
  }

  
// modifier
  modifier(reglementclt){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/reglementclts/' + reglementclt.id, reglementclt, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/reglementclts/'+ id);
}
search(b){ 
 


  const params= new HttpParams();
  params.append('	date',b.date);
  params.append('date_echeance',b.date_echeance);
  params.append('	client',b.client);
  params.append('type_date',b.type_date); 
  params.append('	etat_ch',b.	etat_ch);
  params.append('type_traite',b.type_traite);  
  params.append('	etat_traite',b.	etat_traite);




  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/reglementclts/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
