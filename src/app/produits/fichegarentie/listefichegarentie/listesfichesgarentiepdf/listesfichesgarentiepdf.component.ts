import { Component, OnInit } from '@angular/core';
import { GarentiesService } from 'src/app/SERVICES/service fichegarentie/garenties.service';
import { Garentie } from 'src/app/CLASSES/garentie';


@Component({
  selector: 'app-listesfichesgarentiepdf',
  templateUrl: './listesfichesgarentiepdf.component.html',
  styleUrls: ['./listesfichesgarentiepdf.component.css']
})
export class ListesfichesgarentiepdfComponent implements OnInit {
  garenties: Garentie[];
  id:number;
message:string;
  constructor(private garentiesService :GarentiesService) {  
    this.garentiesService.liste().subscribe( (data:Garentie[]) => {
    this.garenties= data;
  }, error => {
    console.log(error);
    this.message='erreur';
  });}
  ngOnInit(): void {
  }

}
