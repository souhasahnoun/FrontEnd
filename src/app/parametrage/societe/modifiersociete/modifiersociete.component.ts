import { Component, OnInit } from '@angular/core';
import { Societe } from 'src/app/CLASSES/societe';
import { SocietesService } from 'src/app/SERVICES/service societe/societes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-modifiersociete',
  templateUrl: './modifiersociete.component.html',
  styleUrls: ['./modifiersociete.component.css']
})
export class ModifiersocieteComponent implements OnInit {
  private supportedMagasins: FormArray = new FormArray([]);
  private magasinSubscription: Subscription;
  API = 'http://localhost:8000/api';
  societes: Societe[];
  societe: Societe ={
   
    prefixe:null,
    nom:null,
    adresse:null,
    tel	:null,
    fax:null,
    gsm:null,
    email:null,
    site_web:null,
    mf:null,
    rc:null,
    rib:null,
    iban:null,
    cd:null,
    magasin_id:null,
   };
  
   message:string;
  id: any;
  modif: boolean = false;
  constructor(private societesService :SocietesService, private httpClient:HttpClient, private activatedRoute: ActivatedRoute) { 

    //pour le modification
    this.id= this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.modif = true;
      this.societesService.liste().subscribe((data: Societe[]) =>{
        this.societes= data;
       this.societe = this.societes.find((m) => {return m.id == this.id});
       console.log(this.societe);
      }, (error)=>{
        console.log(error);
        
      });
    } else {
      this.modif = false;
    }
  }
  





modifierSociete(){
  // fonction modifier
  if (this.modif){
    this.societesService.modifier(this.societe).subscribe(data => {

      this.message='magasin modifiée avec success';
      console.log(data);
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }
  }
  reset(){
  
    this.societe.tel=null
    this.societe.fax=null
    this.societe.email=null
    this.societe.site_web=null
    this.societe.gsm=null
    this.societe.iban=null
    this.societe.mf=null
    this.societe.rc=null
    this.societe.adresse=null
    this.societe.nom=null
    this.societe.prefixe=null
    this.societe.cd=null
    
  }
  
fetchDefaultSupportedMagasins() {
  this.magasinSubscription = this.httpClient.get(this.API + '/magasins').subscribe(
    (response) => {
      const data = response;
      this.supportedMagasins = this.createFormArrayForMagasins(data);
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
   * @param fetchedMagasins
   */

  createFormArrayForMagasins(fetchedMagasins: any): FormArray {
    let magasins = new FormArray([]);
    console.log('fetchedMagasins length: ' + fetchedMagasins.length);
    for (let entry in fetchedMagasins) {
      console.log(fetchedMagasins[entry]);
      magasins.push(new FormControl(fetchedMagasins[entry]));
    }
    return magasins;
  }
  //pour le champs select
  get magasins(): FormArray {
    return this.supportedMagasins as FormArray;
  }
  //pour le champs select
  onSelectType(htmlElement: any) {
    let element = htmlElement;
    console.log('element id: ' + element.value);
  }
  ngOnInit() { 
    this.fetchDefaultSupportedMagasins();

  }

}
