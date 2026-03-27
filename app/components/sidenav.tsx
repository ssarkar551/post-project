"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavItem } from "./navitem";
import { NavItemProps } from "../lib/definition";

const NAV_LINKS: NavItemProps[] = [
	{ href: "/category", label: "Categories" },
	{ href: "/category/sticker", label: "Stickers" },
	{ href: "/category/postcard", label: "Postcards" },
	{ href: "/category/collections", label: "Collections" },
];

export default function SideNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleOpen = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
	}, [isMenuOpen]);

	return (
		<div className="flex flex-col items-center md:hidden">
			<button
				className="flex items-center justify-center mt-2"
				onClick={(e) => {
					e.stopPropagation();
					toggleOpen();
				}}
				aria-label="open menu"
				aria-expanded={isMenuOpen}
			>
				<Bars3Icon className="w-5" />
			</button>
			<div
				className={`fixed inset-0 z-50 transition-opacity duration-400 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
						{NAV_LINKS.map((link) => (
							<NavItem key ={link.href} label={link.label} href={link.href} onClick={toggleOpen}/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
