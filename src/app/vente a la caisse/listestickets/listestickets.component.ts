import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/CLASSES/ticket';
import { TicketsService } from 'src/app/SERVICES/service ticket/tickets.service';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/SERVICES';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-listestickets',
  templateUrl: './listestickets.component.html',
  styleUrls: ['./listestickets.component.css']
})
export class ListesticketsComponent implements OnInit {


private supportedClients: FormArray = new FormArray([]);
private clientSubscription: Subscription;
API = 'http://localhost:8000/api';
client_id:number;
  tickets: Ticket[];
  
  ticket: Ticket ={
    code:null,
    date:null,
    recu:null,
    rendre:null,
    login:null,
    magasin_id:null,
    document_id:null,
    caisse_id:null,
    type_reg:null,
    date_reception:null,
    etat:0,
   };
   
   allItems: any[];
  term;
   pager: any = {};
   message:string;
  modif: boolean = false;
  id: any;

constructor(private ticketsService :TicketsService, private httpClient:HttpClient, private pagerService: PagerService) { 
   
  // pour afficher liste
  this.ticketsService.liste().subscribe( (data:Ticket[]) => {
    this.tickets= data;
  }, error => {
    console.log(error);
    this.message='Erreur';
  });
  
}
setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }

  // get pager object from service
  this.pager = this.pagerService.getPager(this.allItems.length, page);

  // get current page of items
  this.tickets = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 

ngOnInit() { 
 
  this.fetchDefaultSupportedClients();
  this.ticketsService.liste().subscribe( (data:Ticket[]) => {
  
    this.allItems=data;
      // initialize to page 1
      this.setPage(1);
  });

}
// supprimer
supprimer(id){
  if (confirm('vous etes sur de supprimer cette tickets')){
    this.ticketsService.supprimer(id).subscribe(data => {
      
      console.log(data);
      this.message='ticket supprimee avec success';
    }, error =>{
      console.log(error);
      this.message='Erreur';
    });
  }

}
fetchDefaultSupportedClients() {
  this.clientSubscription = this.httpClient.get(this.API + '/clients').subscribe(
    (response) => {
      const data = response;
      this.supportedClients = this.createFormArrayForClients(data);
    },
    (error) => {
      console.log('error: ' + error);
    }
  );
}
 /**
   * Create and FormArray of the given list of hero's
   * 
   * @param fetchedClients
   */

  createFormArrayForClients(fetchedClients: any): FormArray {
    let clients = new FormArray([]);
    console.log('fetchedClients length: ' + fetchedClients.length);
    for (let entry in fetchedClients) {
      console.log(fetchedClients[entry]);
      clients.push(new FormControl(fetchedClients[entry]));
    }
    return clients;
  }
  //pour le champs select
  get clients(): FormArray {
    return this.supportedClients as FormArray;
  }

    //pour le champs select
    onSelectType(htmlElement: any) {
      let element = htmlElement;
      console.log('element id: ' + element.value);
    } 

    search(){     
  
      let tic=[];
      this.ticketsService.liste().subscribe( (data:Ticket[]) => {
       this.tickets=data;
       for(var i:number = 1; i<this.tickets.length; i++){
        if(
          this.tickets[i].code==this.ticket.code || 
          this.tickets[i].etat==this.ticket.etat ||
          this.tickets[i].date==this.ticket.date 
          )      
          tic.push(this.tickets[i]);
          console.log(JSON.stringify(this.tickets[i])); 
       }
       
       this.tickets=tic; 
      
      
        //prods=data;      
       
      }, error => {
        console.log(error);
        this.message='il ya un erreur';
      });
      
      
      
        } 
}