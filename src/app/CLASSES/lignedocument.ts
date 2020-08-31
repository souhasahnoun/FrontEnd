export interface Lignedocument{
    id?:number;
    prix:Float32Array;
    qte:number;
    tva:Float32Array;
    designation:string;
    remise:Float32Array;
    produit_id:number;
    document_id:number;

    created_at?:string;
    updated_at?:string;

}