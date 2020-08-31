export interface Rsf{
    id?:number;
    date:Date;
    taux?:Float32Array;
    montant?:Float32Array;
    rs:Float32Array;
    net?:Float32Array;
    etat_pay?:number;
    imp?:number;
    etat_imp?:number;
    created?:Date;
    debut?:Date,
    fin?:Date,
    fournisseur_id:number;
    paiementfrs_id?:number;
    created_at?:string;
    updated_at?:string;

}