import { Component, OnInit } from '@angular/core';
import { Garentie } from 'src/app/CLASSES/garentie';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';

@Component({
  selector: 'app-listesfichesgarentieexcel',
  templateUrl: './listesfichesgarentieexcel.component.html',
  styleUrls: ['./listesfichesgarentieexcel.component.css']
})
export class ListesfichesgarentieexcelComponent implements OnInit {

  garenties: Garentie[];
  id:number;

  constructor(private garentiesService :GarentiesService) {  
    this.garentiesService.liste().subscribe( (data:Garentie[]) => {
    this.garenties= data;
  }, error => {
    console.log(error);
    alert('il ya un erreur');
  });}
  ngOnInit(): void {
  }

}
