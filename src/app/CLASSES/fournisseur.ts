import { DatePipe } from '@angular/common';

export interface Fournisseur{
    id?:number;
    code_frs:string;
    raison_social:string;
    email:string;
    site_web:string;
    tel:string;
    gsm:string;
    personne_contacter:string;
    fax:string;
    adresse:string;
    date_aff:Date;
    etat:number;
    mf:string;
    rc:string;
    archive:number;
    created_at?:string;
    updated_at?:string;

}