"use client";
import Image from "next/image";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Searchwrapper from "./searchwrapper";
import { NavItemProps } from "../lib/definition";
import { NavItem } from "./navitem";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS: NavItemProps[] = [
	{ href: "/category", label: "Categories" },
	{ href: "/category/sticker", label: "Stickers" },
	{ href: "/category/postcard", label: "Postcards" },
	{ href: "/category/collections", label: "Collections" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = useCallback(() => setIsMenuOpen(false), []);
	const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// Close menu on Escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isMenuOpen) closeMenu();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isMenuOpen, closeMenu]);

	return (
		<>
			<nav
				className="
					sticky top-0 z-50
					flex items-center justify-between
					px-4 md:px-8 py-3
					bg-white/90 backdrop-blur-md
					border-b border-gray-100
					shadow-sm
				"
				role="navigation"
				aria-label="Main navigation"
			>
				{/* Logo */}
				<Link
					href="/"
					className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
					aria-label="Go to homepage"
				>
					<Image
						src="/logo.webp"
						width={48}
						height={48}
						className="md:w-14 md:h-14 border border-gray-200 rounded-full object-cover transition-transform duration-200 hover:scale-105"
						alt="Post Project Logo"
						priority
					/>
				</Link>

				{/* Desktop nav links */}
				<ul
					className="hidden md:flex items-center gap-1"
					role="list"
				>
					{NAV_LINKS.map((link) => (
						<NavItem key={link.href} label={link.label} href={link.href} />
					))}
				</ul>

				{/* Right actions */}
				<div className="flex items-center gap-3">
					<Searchwrapper />

					<Link
						href="/cart"
						className="
							relative p-2 rounded-full
							text-gray-600 hover:text-blue-600 hover:bg-blue-50
							transition-colors duration-200
							focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
						"
						aria-label="Shopping cart"
					>
						<ShoppingCartIcon className="w-5 h-5 md:w-6 md:h-6" />
					</Link>

					{/* Mobile menu toggle */}
					<button
						className="
							md:hidden p-2 rounded-full
							text-gray-600 hover:text-blue-600 hover:bg-blue-50
							transition-colors duration-200
							focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
						"
						onClick={toggleMenu}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
					>
						{isMenuOpen
							? <XMarkIcon className="w-5 h-5" />
							: <Bars3Icon className="w-5 h-5" />
						}
					</button>
				</div>
			</nav>

			{/* Mobile menu backdrop */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}

			{/* Mobile slide-in menu */}
			<aside
				id="mobile-menu"
				className={`
					fixed top-0 left-0 h-full w-72 z-50
					bg-white shadow-2xl
					flex flex-col
					transform transition-transform duration-300 ease-in-out
					md:hidden
					${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
				`}
				aria-hidden={!isMenuOpen}
				aria-label="Mobile navigation"
			>
				{/* Menu header */}
				<div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
					<Link href="/" onClick={closeMenu} aria-label="Go to homepage">
						<Image
							src="/logo.webp"
							width={40}
							height={40}
							className="border border-gray-200 rounded-full object-cover"
							alt="Post Project Logo"
						/>
					</Link>
					<button
						onClick={closeMenu}
						className="
							p-2 rounded-full
							text-gray-500 hover:text-gray-800 hover:bg-gray-100
							transition-colors duration-200
							focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
						"
						aria-label="Close menu"
					>
						<XMarkIcon className="w-5 h-5" />
					</button>
				</div>

				{/* Menu links */}
				<ul className="flex flex-col py-4 px-3 gap-1 flex-1" role="list">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								onClick={closeMenu}
								className="
									flex items-center px-4 py-3 rounded-lg
									text-gray-700 font-medium
									hover:text-blue-600 hover:bg-blue-50
									transition-colors duration-150
									focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
								"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Menu footer */}
				<div className="px-5 py-4 border-t border-gray-100">
					<Link
						href="/cart"
						onClick={closeMenu}
						className="
							flex items-center gap-3 px-4 py-3 rounded-lg
							text-gray-700 font-medium
							hover:text-blue-600 hover:bg-blue-50
							transition-colors duration-150
						"
					>
						<ShoppingCartIcon className="w-5 h-5" />
						Cart
					</Link>
				</div>
			</aside>
		</>
	);
}