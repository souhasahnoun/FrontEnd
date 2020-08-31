export interface Rsc{
    id?:number;
    date:Date;
    taux:Float32Array;
    montant:Float32Array;
    rs:Float32Array;
    net:Float32Array;
    etat_pay:number;
    imp:number;
    debut?:Date;
    fin?:Date;
    client_id:number;
    reglementcls_id:number;
    created_at?:string;
    updated_at?:string;

}