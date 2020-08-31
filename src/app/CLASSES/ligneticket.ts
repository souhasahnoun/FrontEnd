
export interface Ligneticket{
    id?:number;
    prix:Float32Array;
    quantite:Float32Array;
    tva:Float32Array;
    designation:string;
    remise:number;
    qte_ret:number;
    puachat:Float32Array;
    prixrev:Float32Array;
    ticket_id:number;
    produit_id:number;
    created_at?:string;
    updated_at?:string;

}