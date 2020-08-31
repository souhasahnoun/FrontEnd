import { Component, OnInit } from '@angular/core';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';

@Component({
  selector: 'app-retraitcaisseexcel',
  templateUrl: './retraitcaisseexcel.component.html',
  styleUrls: ['./retraitcaisseexcel.component.css']
})
export class RetraitcaisseexcelComponent implements OnInit {

  retraitcaisses: Retraitcaisse[];
  id:number;
message:string;
  constructor(private retraitcaissesService :RetraitcaissesService,) {  
    this.retraitcaissesService.liste().subscribe( (data:Retraitcaisse[]) => {
    this.retraitcaisses= data;
  }, error => {
    console.log(error);
    this.message='erreur';
  });}
  ngOnInit(): void {
  }
}
