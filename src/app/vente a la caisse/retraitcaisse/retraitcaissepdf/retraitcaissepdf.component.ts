import { Component, OnInit } from '@angular/core';
import { Retraitcaisse } from 'src/app/CLASSES/retraitcaisse';
import { RetraitcaissesService } from 'src/app/SERVICES/service retraitcaisse/retraitcaisses.service';

@Component({
  selector: 'app-retraitcaissepdf',
  templateUrl: './retraitcaissepdf.component.html',
  styleUrls: ['./retraitcaissepdf.component.css']
})
export class RetraitcaissepdfComponent implements OnInit {

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
