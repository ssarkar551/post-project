"use client";
import Image from "next/image";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Searchwrapper from "./searchwrapper";
import SideNav from "./sidenav";
import { NavItemProps } from "../lib/definition";
import { NavItem } from "./navitem";
import { useEffect, useState } from "react";

const NAV_LINKS: NavItemProps[] = [
	{ href: "/category", label: "Categories" },
	{ href: "/category/sticker", label: "Stickers" },
	{ href: "/category/postcard", label: "Postcards" },
	{ href: "/category/collections", label: "Collections" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
		const toggleOpen = () => {
			setIsMenuOpen((prev) => !prev);
		};
	
		useEffect(() => {
			document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		}, [isMenuOpen]);
	
	return (
		<nav className="sticky z-50 flex justify-between md:justify-around m-2 p-2 md:shadow-md shadow-blue-400">
			<div className="md:hidden block">
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
			</div>
			<div>
				<Link href="/">
					<Image
						src="/logo.webp"
						width={80}
						height={80}
						className="hidden md:block border rounded-full"
						alt="Post Project Logo"
						priority
					/>
					<Image
						src="/logo.webp"
						width={40}
						height={40}
						className="block md:hidden border rounded-full"
						alt="Post Project Logo"
						priority
					/>
				</Link>
			</div>
			<ul className="hidden md:flex justify-between gap-4 items-center ">
				{NAV_LINKS.map((link) => (
					<NavItem
						key={link.href}
						label={link.label}
						href={link.href}
					/>
				))}
			</ul>
			<div className="flex justify-between items-center gap-4">
				<Searchwrapper />
				<Link href="/cart">
					<ShoppingCartIcon
						className="w-5 md:w-8 cursor-pointer hover:text-blue-700"
						aria-label="shopping cart"
					/>
				</Link>
			</div>
		</nav>
	);
}
