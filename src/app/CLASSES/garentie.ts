export interface Garentie{
    id?:number;
    num:string;
    date:Date;
    nom:string;
    tel:string;
    piece:string;
    accessoire:string;
    panne:string;
    tache:string;
    prix:Float32Array;
    recu_par:string;
    etat:number;
    magasin_id:number;
    login:string;
    utilisateur_id :number;
    created_at?:string;
    updated_at?:string;

}