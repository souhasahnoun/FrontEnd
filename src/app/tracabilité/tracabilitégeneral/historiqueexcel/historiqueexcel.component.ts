import { Component, OnInit } from '@angular/core';
import { TracabilitesService } from 'src/app/SERVICES/service tracabilite/tracabilites.service';
import { Tracabilite } from 'src/app/CLASSES/tracabilite';

@Component({
  selector: 'app-historiqueexcel',
  templateUrl: './historiqueexcel.component.html',
  styleUrls: ['./historiqueexcel.component.css']
})
export class HistoriqueexcelComponent implements OnInit {

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
