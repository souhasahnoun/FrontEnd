import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Garentie } from 'src/app/CLASSES/garentie';

@Injectable({
  providedIn: 'root'
})
export class GarentiesService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/garenties')
     ;
  }
// ajouter
  ajouter(garentie: Garentie){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/garenties', garentie, {headers: headers});
  }

  
// modifier
  modifier(garentie){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/garenties/' + garentie.id, garentie, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/garenties/'+ id);
}

search(b){ 
 

  console.log('date:'+b.date);
   const params= new HttpParams();
   params.append('date',b.date);
  
  
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/garenties/search',{params: params,headers:headers });  
  
  
  return data;
  
  }

}
