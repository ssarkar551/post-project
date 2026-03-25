export type Product = {
    id: string;
    name: string;
    price: number;
    url: string;
    image_url: string;
    alt: string;
    original_price?: number;
    on_sale?: boolean;
}