export interface Famille{
    id?:number;
    libelle:string;
    merg_ben:Float32Array;
    prix:Float32Array;
    etat:number;
    categorie_id:number;
    created_at?:string;
    updated_at?:string;

}