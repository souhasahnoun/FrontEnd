import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Marque } from 'src/app/CLASSES/marque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarquesService {

  API = 'http://localhost:8000/api';
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/marques')
     ;
  }
// ajouter
  ajouter(marque: Marque){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/marques', marque, {headers: headers});
  }

  
// modifier
  modifier(marque){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/marques/' + marque.id, marque, {headers: headers});
  }

  modifierE(etat){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/marques/', etat, {headers: headers});
  }
//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/marques/'+ id);
}

archiver(marque){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/marques/' +  marque.id +"/archiver", {headers: headers});
}
desarchiver(marque){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/marques/' +  marque.id +"/desarchiver", {headers: headers});
}
search(b){ 
 

console.log('etat:'+b.etat);
 const params= new HttpParams();
 params.append('etat',b.etat);



 const headers = new HttpHeaders();
 headers.set('Content-Type', 'application/json; charset=utf-8');

//return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
let data=this.httpClient.get(this.API + '/marques/search',{params: params,headers:headers });  


return data;

}
}
