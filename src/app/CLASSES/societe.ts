import { Magasin } from 'src/app/CLASSES/magasin';

export interface Societe{
    id?:number;
    prefixe:string;
    nom:string;
    adresse:string;
    tel	:string;
    fax:string;
    gsm:string;
    email:string;
    site_web:string;
    mf:string;
    rc:string;
    rib:string;
    iban:string;
    cd:string;
    magasin_id:number;
    created_at?:string;
    updated_at?:string;

}