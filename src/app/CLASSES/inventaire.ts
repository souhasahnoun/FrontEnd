
export interface Inventaire{

    id?:number;
    QteStock:number;
    date:Date;
    login:string;
    produit_id:number;
    magasin_id:number;
    created_at?:string;
    updated_at?:string;

}