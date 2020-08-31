import { Component, OnInit } from '@angular/core';
import { Client } from '../../../CLASSES/client';
import { DatePipe } from '@angular/common';
import { ClientsService } from 'src/app/SERVICES/service client/clients.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimerclient',
  templateUrl: './imprimerclient.component.html',
  styleUrls: ['./imprimerclient.component.css'],
  providers: [DatePipe]
})
export class ImprimerclientComponent implements OnInit {
id:number;
  API = 'http://localhost:8000/api';
  clients: Client[];
  myDate = new Date();
  constructor(private clientsService :ClientsService, private httpClient:HttpClient,private datePipe: DatePipe) {  
   this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
    // pour afficher liste
    this.clientsService.liste().subscribe( (data:Client[]) => {
      this.clients= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}
