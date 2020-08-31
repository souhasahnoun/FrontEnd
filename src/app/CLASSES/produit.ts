export interface Produit{
    id?:number;
    designation:string;
    ref_prod:string;
    code:string;
    nom_prod:string;
    mrg_ben_pub:number;
    stk_alert:number;
    unite_id:number;
    image:string;

    tva_id:number;
    ristourne:number;
    points:number;
    mrg_ben_rev:number;
    prixf:number;
    prixfrev:number;
    prixrispub:number;
    prixrisrev:number;
    prix_min:number;
    prix_revient:Float32Array;
    prix_achat:number
    etat:number;
    marque_id:number;
    categorie_id:number;
    famille_id:number;
    created_at?:string;
    updated_at?:string;

}