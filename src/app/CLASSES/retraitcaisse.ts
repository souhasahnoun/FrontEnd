export interface Retraitcaisse{
    id?:number;
    montant:Float32Array;
    type:string;
    date:Date;
    designation:string;
    beneficiaire:string;
    num_cheque:string;
    banque:string;
    login:string;
    caisse_id:number;
    created_at?:string;
    updated_at?:string;

}