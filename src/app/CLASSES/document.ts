export interface Document{
    id?:number;
    num:number;
    date:Date;
    etat:number;
    fodec:number;
    etat_pay:number;
    type_pay:string;
    rs:number;
    etat_rs:string;
    login:string;
    date_retenu:Date;
    type:number;
    date_prev:Date;
    date_dec:Date;
    timbre:number;
    date_fin:Date;
    fournisseur_id:number;
    designation:string;
    client_id:number;
    created_at?:string;
    updated_at?:string;

}