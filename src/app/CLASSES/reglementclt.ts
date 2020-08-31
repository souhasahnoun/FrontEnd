export interface Reglementclt{
    id?:number;
    date:Date;
    mode:string;
    num:string;
    etat:number;
    montant:number;
    type_pay:string;
    client:string;
    banque:string;
    date_echeance:Date;
    etat_ch:string;
    etat_traite:string;
    type_date:string;
    type_traite:string;
    solder:Float32Array;
    non_solder:Float32Array;
    impression:Date;
    created_at?:string;
    updated_at?:string;

}