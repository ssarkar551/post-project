export type Product = {
    id: string;
    name: string;
    price: number;
    url: string;
    image_url: string;
    alt: string;
    original_price?: number;
    on_sale?: boolean;
};

export type ProductGridProps = {
    category: string;
    filters: string;
};

export type NavItemProps = {
    label: string;
    href: string;
    onClick?: () => void;
};

export type CartItem = {
    id: string;
    name: string;
    price: number;
    url: string;
    image_url: string;
    alt: string;
    quantity: number;
};

export type CartState = {
    items: CartItem[];
};

export type CartProduct = Product & {
    quantity: number;
}