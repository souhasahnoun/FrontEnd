export interface Paiementfrs{
    id?:number;
    date:Date;
    mode:string;
    num:string;
    etat:number;
    montant:number;
    fournisseur:string;
    banque:string;
    ordrepaiement_id:number;
    num_fact:number;
    date_echeance:Date;
    solder:Float32Array;
    non_solder:Float32Array;
    impression:Date;
    type_ch:string;
    etat_ch:string;
    type_date:string;
    etat_traite:string;
    type_traite:string;
    created_at?:string;
    updated_at?:string;

}