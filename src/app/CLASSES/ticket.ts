
export interface Ticket{
    id?:number;
    code:number;
    date:Date;
    recu:number;
    rendre:number;
    type_reg:string;
    date_reception:Date;
    etat:number;
    login:string;
    magasin_id:number;
    document_id:number;
    caisse_id:number;
    created_at?:string;
    updated_at?:string;

}