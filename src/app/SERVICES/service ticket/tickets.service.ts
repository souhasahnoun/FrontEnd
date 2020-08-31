import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ticket } from 'src/app/CLASSES/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/tickets')
     ;
  }
// ajouter
  ajouter(ticket: Ticket){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/tickets', ticket, {headers: headers});
  }

  
// modifier
  modifier(ticket){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/tickets/' + ticket.id, ticket, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/tickets/'+ id);
}

search(b){ 
 

  console.log('code:'+b.code);
   const params= new HttpParams();
   params.append('code',b.code);
   params.append('etat',b.etat);
   params.append('date',b.date);
  
   const headers = new HttpHeaders();
   headers.set('Content-Type', 'application/json; charset=utf-8');
  
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
  let data=this.httpClient.get(this.API + '/tickets/search',{params: params,headers:headers });  
  
  
  return data;
  
  }


}
