"use client";
import { useAppSelector } from "../lib/hooks";
import ProductCard from "../components/productcard";


export default function Page() {
	const items = useAppSelector((state) => state.cart.items);
    const total = useAppSelector((state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0));

	return (
		<div className="flex flex-col md:flex-row justify-center gap-4">
			<div className="w-64 flex flex-col justify-center items-center gap-4 p-4 m-4">
				{items.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
            <div className="flex flex-col items-start h-fit shadow-lg/40 p-4 m-4 gap-4">
                <h3 className="border-b-2 w-full font-bold">Cart Summary</h3>
                <span>Total: ₹{total}</span>
                <button className="bg-blue-700 text-white p-2 hover:bg-blue-100 hover:text-blue-900 cursor-pointer">Proceed to checkout</button>
            </div>
		</div>
	);
}
