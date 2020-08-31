import { Component, OnInit } from '@angular/core';
import { EntreecaissesService } from 'src/app/SERVICES/service entreecaisse/entreecaisses.service';
import { Entreecaisse } from 'src/app/CLASSES/entreecaisse';

@Component({
  selector: 'app-entreecaisseexcel',
  templateUrl: './entreecaisseexcel.component.html',
  styleUrls: ['./entreecaisseexcel.component.css']
})
export class EntreecaisseexcelComponent implements OnInit {

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
