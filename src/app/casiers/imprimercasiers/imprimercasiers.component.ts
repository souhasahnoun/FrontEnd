import { Component, OnInit } from '@angular/core';
import { Casier } from 'src/app/CLASSES/casier';
import { CasiersService } from 'src/app/SERVICES/service casier/casiers.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-imprimercasiers',
  templateUrl: './imprimercasiers.component.html',
  styleUrls: ['./imprimercasiers.component.css']
})
export class ImprimercasiersComponent implements OnInit {

  API = 'http://localhost:8000/api';
  casiers: Casier[];
  id:number;
  constructor(private casiersService :CasiersService, private httpClient:HttpClient) {  
   
    // pour afficher liste
    this.casiersService.liste().subscribe( (data:Casier[]) => {
      this.casiers= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}

  ngOnInit(): void {
  }

}

