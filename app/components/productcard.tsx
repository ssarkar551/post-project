import { Product } from "../lib/definition";
import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ data }: { data: Product }) {
	return (
		<article key={data.id} className="flex flex-col">
			<Link href={data.url}>
				<Image src={data.image_url} alt={data.alt} />
				<h3>{data.name}</h3>
				<div className="flex">
					<span>{data?.original_price}</span>
					<span>{data.price}</span>
				</div>
			</Link>
		</article>
        
	);
}
