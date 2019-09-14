import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product, PACK_TYPE } from './products.interface';
import { api } from '../../../api.config';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    constructor(
        private http: HttpClient,
    ) {}

    all(): Observable<Product[]> {
        // return this.http.get<Product[]>(api.products.all);
        return of([
            {
                barcode: '12312312312',
                name: 'Coca cola Zero',
                photo_url: 'https://image.ceneostatic.pl/data/products/15170177/i-coca-cola-zero-330ml.jpg',
                packing: PACK_TYPE.ME_TERAPACK
            },
            {
                barcode: '8745972349234',
                name: 'Sprite 33ml',
                photo_url: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450',
                packing: PACK_TYPE.ME_TERAPACK
            },
        ]);
    }
    one() {}
    create() {}
    update() {}
}