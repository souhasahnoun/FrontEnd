import { Component, OnInit } from '@angular/core';
import { Reception } from 'src/app/CLASSES/reception';
import { ReceptionsService } from 'src/app/SERVICES/service reception/receptions.service';

@Component({
  selector: 'app-imprimerfichereception',
  templateUrl: './imprimerfichereception.component.html',
  styleUrls: ['./imprimerfichereception.component.css']
})
export class ImprimerfichereceptionComponent implements OnInit {
  receptions: Reception[];
  id:number;
message:string;
  constructor(private receptionsService :ReceptionsService) {  
    this.receptionsService.liste().subscribe( (data:Reception[]) => {
      this.receptions= data;
    }, error => {
      console.log(error);
      this.message='il ya un erreur';
    });}
  ngOnInit(): void {
  }

}
