import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Produit } from 'src/app/CLASSES/produit';
import { ListeretenuesourcefComponent } from 'src/app/achats/RSF/listeRSF/listeretenuesourcef/listeretenuesourcef.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  API = 'http://localhost:8000/api';
 
  constructor( private httpClient:HttpClient) { }
// afficher
  liste(){
    return this.httpClient.get(this.API + '/produits')
     ;
  }
//find
/*loadByIds(ids){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.get(this.API + '/produits/loadByIds/' + ids, {headers: headers});
     ;
  }*/
// ajouter
  ajouter(produit: Produit){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.post(this.API + '/produits', produit, {headers: headers});
  }

  
// modifier
  modifier(produit){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    return this.httpClient.put(this.API + '/produits/' + produit.id, produit, {headers: headers});
  }

//supprimer
supprimer(id){
  return this.httpClient.delete(this.API + '/produits/'+ id);
}

archiver(produit){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/produits/' +  produit.id +"/archiver", {headers: headers});
}
desarchiver(produit){
  const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  return this.httpClient.put(this.API + '/produits/' +  produit.id +"/desarchiver", {headers: headers});
}
  
/*search(produit){ 
let params= new HttpParams();
let t= JSON.parse(produit) ;
let fillable = ['ref_prod', 'nom_prod','code','mrg_ben_pub','stk_alert','unit','image','designation','prix_achat','ristourne','points','mrg_ben_rev','prixf','prixfpub','prixfrev','prixrispub','prixrisrev','prix_revient','etat','prix_min','categorie_id','famille_id','marque_id','tva_id'];

;

for (let x in fillable ) { 

    params.set(x, t[x]);
}
 
  
    
    
//return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
return this.httpClient.get(this.API + '/produits/search',{params: params });
 
 
 
}*/

search(p){ 
 
       /*
      $columns = ['ref_prod', 
      'famille_id',
      'marque_id',
      'tva_id'];*/
 // let  jsonProduit=JSON.stringify(produit);
 
console.log('marque_id:'+p.marque_id);
      const params= new HttpParams();
      params.append('ref_prod',p.ref_prod);
      params.append('famille_id',p.famille_id);
      params.append('marque_id',p.marque_id);
      params.append('etat',p.etat);
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
   
  //return this.httpClient.get(this.API + '/produits/search',{params: new HttpParams().set('marque_id', produit.marque_id)});
   let data=this.httpClient.get(this.API + '/produits/search',{params: params,headers:headers });  
    
 
   return data;
   
  }
}