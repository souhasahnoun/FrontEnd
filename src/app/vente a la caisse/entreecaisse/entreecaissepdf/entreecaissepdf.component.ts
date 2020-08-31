import { Component, OnInit } from '@angular/core';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';

@Component({
  selector: 'app-entreecaissepdf',
  templateUrl: './entreecaissepdf.component.html',
  styleUrls: ['./entreecaissepdf.component.css']
})
export class EntreecaissepdfComponent implements OnInit {


  entreecaisses: Entreecaisse[];
  id:number;
message:string;
  constructor(private entreecaissesService :EntreecaissesService,) {  
    this.entreecaissesService.liste().subscribe( (data:Entreecaisse[]) => {
    this.entreecaisses= data;
  }, error => {
    console.log(error);
    this.message='erreur';
  });}
  ngOnInit(): void {
  }

}
