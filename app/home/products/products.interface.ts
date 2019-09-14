export interface Product {
    barcode: string;
    name: string;
    photo_url: string;
    packing: string;
}

export enum PACK_TYPE {
    ME_TERAPACK = "me_tera", //tworzywa sztuczne
    PAPER = "paper", //papiery
    GLASS = "glass", //szkło
    FOOD = "food" //organiczne
}