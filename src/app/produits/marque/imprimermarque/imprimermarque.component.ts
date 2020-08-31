import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../CLASSES/marque';
import { MarquesService } from 'src/app/SERVICES/service marque/marques.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imprimermarque',
  templateUrl: './imprimermarque.component.html',
  styleUrls: ['./imprimermarque.component.css']
})
export class ImprimermarqueComponent implements OnInit {
id:number;
  API = 'http://localhost:8000/api';
  marques: Marque[];
 
  constructor(private marquesService :MarquesService, private httpClient:HttpClient) {  
 
    // pour afficher liste
    this.marquesService.liste().subscribe( (data:Marque[]) => {
      this.marques= data;
    }, error => {
      console.log(error);
      alert('il ya un erreur');
    });}
    
    ngOnInit(): void {
    }

}
