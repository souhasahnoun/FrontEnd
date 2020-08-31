export interface Caisse{
    id?:number;
    date:Date;
    cloture:number;
    montant_final:number;
    login:string;
    fond_caisse:number;
    magasin_id:number;
    client_id:number;
    utilisateur_id:number;
    created_at?:string;
    updated_at?:string;

}