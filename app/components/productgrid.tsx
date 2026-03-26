import { getProducts } from "../lib/actions";
import ProductCard from "./productcard";

export default async function ProductGrid({filters}: {filters:string}){
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
            {products.map((p) => (
                <ProductCard data={p} key={p.id}/>
            ))}
        </div>
    )
}