import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etatcomptec',
  templateUrl: './etatcomptec.component.html',
  styleUrls: ['./etatcomptec.component.css']
})
export class EtatcomptecComponent implements OnInit {
top:number;
  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    top:null
  }

}
