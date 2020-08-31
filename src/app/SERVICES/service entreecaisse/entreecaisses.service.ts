import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';

@Injectable({
  providedIn: 'root'
})
export class EntreecaissesService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/entreecaisses')
     ;
  }
// ajouter
  ajouter(entreecaisse: Entreecaisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/entreecaisses', entreecaisse, {headers: headers});
  }

  
// modifier
  modifier(entreecaisse){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/entreecaisses/' + entreecaisse.id, entreecaisse, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/entreecaisses/'+ id);
}


search(b){ 
 

  console.log('date:'+b.date);
   const params= new HttpParams();
   params.append('date',b.date);
   params.append('login',b.login);
  
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/entreecaisses/search',{params: params,headers:headers });  
  
  
  return data;
  
  }

}
