
import ProductGrid from "@/app/components/productgrid";
import { fetchProductData } from "@/app/lib/data";

export default async function Page({searchParams}: {searchParams: string}) {
    

    return (
        <div className="flex flex-around">
            <ProductGrid filters={searchParams}/>
        </div>
    )
}