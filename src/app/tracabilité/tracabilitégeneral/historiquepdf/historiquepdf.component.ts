import { Component, OnInit } from '@angular/core';
import { Tracabilite } from 'src/app/CLASSES/tracabilite';
import { TracabilitesService } from 'src/app/SERVICES/service tracabilite/tracabilites.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historiquepdf',
  templateUrl: './historiquepdf.component.html',
  styleUrls: ['./historiquepdf.component.css']
})
export class HistoriquepdfComponent implements OnInit {

  message:string;

  tracabilites: Tracabilite[];

  id:number;
  constructor(private tracabilitesService :TracabilitesService) {  
    // pour afficher liste
    this.tracabilitesService.liste().subscribe( (data:Tracabilite[]) => {
      this.tracabilites= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}

  ngOnInit(): void {

  }
 

 
}
