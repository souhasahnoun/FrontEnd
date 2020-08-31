import { Component, OnInit } from '@angular/core';
import { Reglementclt } from 'src/app/CLASSES/reglementclt';
import { ReglementcltsService } from 'src/app/SERVICES/service reglementclt/reglementclts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimerreglementc',
  templateUrl: './imprimerreglementc.component.html',
  styleUrls: ['./imprimerreglementc.component.css']
})
export class ImprimerreglementcComponent implements OnInit {

  API = 'http://localhost:8000/api';
  reglementclts: Reglementclt[];

  id:number;
  constructor(private reglementcltsService :ReglementcltsService, private httpClient:HttpClient) {  

    // pour afficher liste
    this.reglementcltsService.liste().subscribe( (data:Reglementclt[]) => {
      this.reglementclts= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}

  ngOnInit(): void {
  }


}
