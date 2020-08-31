import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Rsf } from 'src/app/CLASSES/rsf';
import { RsfsService } from 'src/app/SERVICES/service rsf/rsfs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/CLASSES/document';
@Component({
  selector: 'app-modifierretenuf',
  templateUrl: './modifierretenuf.component.html',
  styleUrls: ['./modifierretenuf.component.css']
})
export class ModifierretenufComponent implements OnInit {
  private supportedFournisseurs: FormArray = new FormArray([]);
  private fournisseurSubscription: Subscription;
  API = 'http://localhost:8000/api';
  documents: Document[];
  document: Document ={
    num:null,
    date:null,
    etat:null,
    fodec:null,
    etat_pay:null,
    type_pay:null,
    rs:null,
    etat_rs:null,
    login:null,
    date_retenu:null,
    type:null,
    date_prev:null,
    date_dec:null,
    timbre:null,
    date_fin:null,
    fournisseur_id:null,
    designation:null,
    client_id:null,
   };
   rsfs: Rsf[];
   rsf: Rsf ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,
    etat_imp:null,
    created:null,
    fournisseur_id:null,
    paiementfrs_id:null,
   
   };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private rsfsService :RsfsService,private documentsService :DocumentsService,  private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
    this.documentsService.liste().subscribe( (data:Document[]) => {
      this.documents= data;
    }, error => {
      console.log(error);
      this.message='Erreur';
    });
    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.rsfsService.liste().subscribe((data: Rsf[]) =>{
        this.rsfs= data;
       this.rsf = this.rsfs.find((m) => {return m.id == this.id});
       console.log(this.rsf);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  this.fetchDefaultSupportedFournisseurs();

}
fetchDefaultSupportedFournisseurs() {
  this.fournisseurSubscription = this.httpClient.get(this.API + '/fournisseurs').subscribe(
    (response) => {
      const data = response;
      this.supportedFournisseurs = this.createFormArrayForFournisseurs(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}

//pour le champs select
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedFournisseurs
   */

  createFormArrayForFournisseurs(fetchedFournisseurs: any): FormArray {
    let fournisseurs = new FormArray([]);
    console.log('fetchedFournisseurs length: ' + fetchedFournisseurs.length);
    for (let entry in fetchedFournisseurs) {
      console.log(fetchedFournisseurs[entry]);
      fournisseurs.push(new FormControl(fetchedFournisseurs[entry]));
    }
    return fournisseurs;
  }
  //pour le champs select
  get fournisseurs(): FormArray {
    return this.supportedFournisseurs as FormArray;
  }
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 

modifierrsf(){
  // fonction modifier
  if (this.modif){
    this.rsfsService.modifier(this.rsf).subscribe(data => {

      this.message='rsf modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
    this.rsf.date=null
    this.rsf.etat_imp=null
    this.rsf.etat_pay=null
    this.rsf.fournisseur_id=null
    this.rsf.imp=null
    this.rsf.montant=null
    this.rsf.net=null
    this.rsf.paiementfrs_id=null
    this.rsf.rs=null
    this.rsf.taux=null
  }

}
