"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleOpen = () => {
		console.log("inside hamburger");
		setIsMenuOpen((prev) => !prev);
	};
	return (
		<div className="flex flex-col items-center md:hidden">
			<button className="flex items-center justify-center mt-2">
				<Bars3Icon
					className="w-5"
					onClick={(e) => {
						e.stopPropagation();
						toggleOpen();
					}}
				/>
			</button>
			<div
				className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
			>
				<div
					className="absolute inset-0 bg-black/70 backdrop-blur-sm"
					onClick={toggleOpen}
				/>
				<div
					className={`absolute left-0 top-0 h-full w-64 bg-white p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
				>
					<button onClick={toggleOpen}>
						<XMarkIcon className="w-5 cursor-pointer focus:text-blue-700" />
					</button>
					<ul className="flex flex-col justify-between gap-4 items-center ">
						<Link href="/category/sticker">
							<li className="cursor-pointer focus:text-blue-700 md:text-xl">
								Stickers
							</li>
						</Link>
						<Link href="/category/postcard">
							<li className="cursor-pointer focus:text-blue-700 md:text-xl">
								Postcards
							</li>
						</Link>
						<Link href="/category/collections">
							<li className="cursor-pointer focus:text-blue-700 md:text-xl">
								Collections
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
