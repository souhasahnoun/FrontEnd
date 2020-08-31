
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Rsc } from 'src/app/CLASSES/rsc';
import { RscsService } from 'src/app/SERVICES/service rsc/rscs.service';
import { DocumentsService } from 'src/app/SERVICES/service document/documents.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/CLASSES/document';

@Component({
  selector: 'app-modifierretenuc',
  templateUrl: './modifierretenuc.component.html',
  styleUrls: ['./modifierretenuc.component.css']
})
export class ModifierretenucComponent implements OnInit {
  private supportedClients: FormArray = new FormArray([]);
  private clientSubscription: Subscription;
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
   rscs: Rsc[];
   rsc: Rsc ={
    date:null,
    taux:null,
    montant:null,
    rs:null,
    net:null,
    etat_pay:null,
    imp:null,
    client_id:null,
    reglementcls_id:null,
   };
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private rscsService :RscsService,private documentsService :DocumentsService,  private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 
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
      this.rscsService.liste().subscribe((data: Rsc[]) =>{
        this.rscs= data;
       this.rsc = this.rscs.find((m) => {return m.id == this.id});
       console.log(this.rsc);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  

ngOnInit() { 
  this.fetchDefaultSupportedClients();

}
fetchDefaultSupportedClients() {
  this.clientSubscription = this.httpClient.get(this.API + '/clients').subscribe(
    (response) => {
      const data = response;
      this.supportedClients = this.createFormArrayForClients(data);
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
   * @param fetchedClients
   */

  createFormArrayForClients(fetchedClients: any): FormArray {
    let clients = new FormArray([]);
    console.log('fetchedClients length: ' + fetchedClients.length);
    for (let entry in fetchedClients) {
      console.log(fetchedClients[entry]);
      clients.push(new FormControl(fetchedClients[entry]));
    }
    return clients;
  }
  //pour le champs select
  get clients(): FormArray {
    return this.supportedClients as FormArray;
  }
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  } 

modifierrsc(){
  // fonction modifier
  if (this.modif){
    this.rscsService.modifier(this.rsc).subscribe(data => {

      this.message='rsc modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
    this.rsc.date=null
    this.rsc.etat_pay=null
    this.rsc.client_id=null
    this.rsc.imp=null
    this.rsc.montant=null
    this.rsc.net=null
    this.rsc.reglementcls_id=null
    this.rsc.rs=null
    this.rsc.taux=null
  }

}
