import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etatcomptef',
  templateUrl: './etatcomptef.component.html',
  styleUrls: ['./etatcomptef.component.css']
})
export class EtatcomptefComponent implements OnInit {
  top:number;
  constructor() { }

  ngOnInit(): void {
  }
reset(){
  top:null
}

}
