"use client";

import { FunnelIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SideBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen((prev) => !prev);

	const updateFilter = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set(key, value);
		router.push(`?${params.toString()}`);
	};

	const activePrice = searchParams.get("price");
	const activeSort = searchParams.get("sort");

	return (
		
		<div>
			{/* Mobile button */}
			<button className="md:hidden w-6" onClick={toggleOpen}>
				<FunnelIcon />
			</button>

			{/* Backdrop */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
					onClick={toggleOpen}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`
                        fixed top-0 left-0 h-full w-64 z-50 bg-white p-6
                        transform transition-transform duration-300 ease-in-out
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}
                        md:static md:translate-x-0 md:flex md:flex-col md:h-auto md:w-64
        `}
			>
				<h3 className="font-medium mb-2">Price</h3>
				<button
					onClick={() => updateFilter("price", "0-100")}
					className={`
						${activePrice === "0-100" ? "text-blue-600 font-medium" : ""} cursor-pointer
					`}
				>
					₹0 - ₹100
				</button>

				<h3 className="mt-4">Sort</h3>
				<button
					onClick={() => updateFilter("sort", "price_asc")}
					className={`
						${activeSort === "price_asc" ? "text-blue-600 font-medium" : ""} cursor-pointer
					`}
				>
					Price: Low to High
				</button>
			</aside>
		</div>
	);
}
