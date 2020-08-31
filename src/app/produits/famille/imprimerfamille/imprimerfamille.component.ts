import { Component, OnInit } from '@angular/core';
import { Famille } from 'src/app/CLASSES/famille';
import { FamillesService } from 'src/app/SERVICES/service famille/familles.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-imprimerfamille',
  templateUrl: './imprimerfamille.component.html',
  styleUrls: ['./imprimerfamille.component.css']
})
export class ImprimerfamilleComponent implements OnInit {

  API = 'http://localhost:8000/api';
  familles: Famille[];
 id:number;
 message:string;
  constructor(private famillesService :FamillesService, private httpClient:HttpClient) {  
 
    // pour afficher liste
    this.famillesService.liste().subscribe( (data:Famille[]) => {
      this.familles= data;
    }, error => {
      console.log(error);
      this.message=" erreur";
    });
  }
    ngOnInit(): void {
    }


}
