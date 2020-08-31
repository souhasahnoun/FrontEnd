import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';

@Injectable({
  providedIn: 'root'
})
export class RetraitcaissesService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/depenses')
     ;
  }
// ajouter
  ajouter(retraitcaisse: Retraitcaisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/depenses', retraitcaisse, {headers: headers});
  }

  
// modifier
  modifier(retraitcaisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/depenses/' + retraitcaisse.id, retraitcaisse, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/depenses/'+ id);
}

search(b){ 
 

  console.log('date:'+b.date);
   const params= new HttpParams();
   params.append('date',b.date);
   params.append('login',b.login);
  
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/depenses/search',{params: params,headers:headers });  
  
  
  return data;
  
  }

}

