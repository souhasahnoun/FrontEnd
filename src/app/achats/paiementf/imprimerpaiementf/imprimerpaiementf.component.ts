import { Component, OnInit } from '@angular/core';
import { Paiementfrs } from 'src/app/CLASSES/paiementfrs';
import { PaiementsfrsService } from 'src/app/SERVICES/service paiementsfrs/paiementsfrs.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimerpaiementf',
  templateUrl: './imprimerpaiementf.component.html',
  styleUrls: ['./imprimerpaiementf.component.css']
})
export class ImprimerpaiementfComponent implements OnInit {

  API = 'http://localhost:8000/api';
  paiementfrss: Paiementfrs[];

  id:number;
  constructor(private paiementsfrsService :PaiementsfrsService, private httpClient:HttpClient) {  

    // pour afficher liste
    this.paiementsfrsService.liste().subscribe( (data:Paiementfrs[]) => {
      this.paiementfrss= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}

  ngOnInit(): void {
  }

}
