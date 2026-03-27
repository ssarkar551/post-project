import { getProducts } from "../lib/actions";
import ProductCard from "./productcard";
import { ProductGridProps } from "../lib/definition";

export default async function ProductGrid({category ,filters}: ProductGridProps){
    const products = await getProducts(category, filters);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
            {products.map((p) => (
                <ProductCard data={p} key={p.id}/>
            ))}
        </div>
    )
}