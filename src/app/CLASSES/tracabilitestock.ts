import { DatePipe } from '@angular/common';

export interface Tracabilitestock{
    id?:number;
    module:string;
    operation:string;
    qte:number;
    qtestock:number;
    login:string;
    created:Date;
    magasin_id:number;
    produit_id:number;
    created_at?:string;
    updated_at?:string;

}