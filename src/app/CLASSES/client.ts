import { DecimalPipe } from '@angular/common';

export interface Client{
    id?:number;
    code_clt:string;
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
    type:string;
    timbre:Float32Array;
    plafond:DecimalPipe;
    created_at?:string;
    updated_at?:string;

}