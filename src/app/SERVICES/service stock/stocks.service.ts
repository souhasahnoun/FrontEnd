import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Stock } from 'src/app/CLASSES/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  API = 'http://localhost:8000/api';

 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/stocks')
     ;
  }
// ajouter
  ajouter(stock: Stock){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/stocks', stock, {headers: headers});
  }

  
// modifier
  modifier(stock){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/stocks/' + stock.id, stock, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/stocks/'+ id);
}
search(b){ 
 


  const params= new HttpParams();

  params.append('produit_id',b.marque_id);
  params.append('magasin_id',b.magasin_id);


  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
 
 //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
 let data=this.httpClient.get(this.API + '/stocks/search',{params: params,headers:headers });  
 
 
 return data;
 
 }
}
