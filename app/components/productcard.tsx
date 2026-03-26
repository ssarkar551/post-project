import { Product } from "../lib/definition";
import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ data }: { data: Product }) {
	return (
		<article key={data.id} className="flex flex-col justify-center shadow-lg/40 shadow-blue-900 p-4">
			<Link href={data.url}>
				<Image src={data.image_url} alt={data.alt} width={400} height={400} className="w-full h-48 object-cover rounded-md"/>
				<h3 className="truncate text-sm font-semibold mt-2">{data.name}</h3>
				<div className="flex gap-4">
					{data?.original_price && <span className="text-gray-400 line-through text-sm">{data.original_price}</span> }
					
					<span className="text-blue-600 font-bold">{data.price}</span>
				</div>
			</Link>
		</article>
        
	);
}
