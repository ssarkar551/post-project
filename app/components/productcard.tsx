"use client";

import { Product } from "../lib/definition";
import Link from "next/link";
import Image from "next/image";
import {
	MinusIcon,
	PlusIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { addItem, deleteItem } from "../lib/cartSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

export default function ProductCard({ data }: { data: Product }) {
	const dispatch = useAppDispatch();

	const quantity = useAppSelector((state) => {
		const item = state.cart.items.find((item) => item.id === data.id);
		return item?.quantity ?? 0;
	});

	const handleAddToCart = () => {
		dispatch(
			addItem({
				id: data.id,
				name: data.name,
				price: data.price,
				image_url: data.image_url,
				alt: data.alt,
				url: data.url,
				quantity: 1,
			}),
		);
	};
	const handleRemoveFromCart = () => {
		dispatch(deleteItem(data.id));
	};

	return (
		<article className="flex flex-col justify-center shadow-lg/40 shadow-blue-900 p-4">
			<Link href={data.url}>
				<Image
					src={data.image_url}
					alt={data.alt}
					width={400}
					height={400}
					className="w-full h-48 object-cover rounded-md"
				/>
				<h3 className="truncate text-sm font-semibold mt-2">
					{data.name}
				</h3>
				<div className="flex gap-4">
					<span className="text-blue-600 font-bold">
						₹{data.price}
					</span>
					{data?.original_price && (
						<span className="text-red-700 line-through text-sm">
							₹{data.original_price}
						</span>
					)}
				</div>
			</Link>
			{quantity > 0 ? (
				<div
					className="flex justify-between items-center cursor-pointer w-full px-4 py-1.5 rounded-3xl
							bg-gray-200 text-blue-700 border-2 border-blue-700 
							focus:text-white focus:bg-blue-700"
				>
					<button
						type="button"
						disabled={quantity === 0}
						aria-label="decrease cart quantity"
						className={`px-3 py-1.5 border-r-2 border-blue-700 hover:text-white hover:bg-blue-700 ${quantity === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
						onClick={handleRemoveFromCart}
					>
						<MinusIcon className="w-5 mx-1" />
					</button>

					<span className="font-semibold text-shadow-md">{quantity}</span>
					<button
						type="button"
						aria-label="increase cart quantity"
						className="px-3 py-1.5 border-l-2 border-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer"
						onClick={handleAddToCart}
					>
						<PlusIcon className="w-5 mx-1" />
					</button>
				</div>
			) : (
				<button
					className="flex justify-center gap-1 items-center cursor-pointer w-20 md:w-full px-4 py-3 rounded-3xl
							bg-gray-200 text-blue-700 border-2 border-blue-700 
							focus:text-white focus:bg-blue-700"
					onClick={handleAddToCart}
					type="button"
					aria-label="increase cart quantity"
				>
					<span className="hidden md:block text-sm">Add To Cart</span>

					<ShoppingCartIcon className="w-5" />
				</button>
			)}
		</article>
	);
}
