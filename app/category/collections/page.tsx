
import ProductGrid from "@/app/components/productgrid";

export default async function Page({searchParams}: {searchParams: string}) {
    
    return (
        <div className="flex flex-around">
            <ProductGrid category="collection" filters={searchParams}/>
        </div>
    )
}