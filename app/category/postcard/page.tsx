
import { fetchProductData } from "@/app/lib/data";

export default async function Page({searchParams}: {searchParams: string}) {
    const products = await fetchProductData(searchParams);

    return (
        <div>
            <p>Postcard</p>
        </div>
    )
}