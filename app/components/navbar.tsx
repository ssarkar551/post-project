import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Searchwrapper from "./searchwrapper";
import SideNav from "./sidenav";

export default function Navbar() {
	return (
		<nav className="sticky flex justify-between md:justify-around m-2 p-2 md:shadow-md shadow-blue-400">
            <div className="md:hidden block">
                <SideNav/>
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
				<Link href="/category">
					<li className="cursor-pointer hover:text-blue-700 md:text-xl" aria-label="stickers">
						Categories
					</li>
				</Link>
				<Link href="/category/sticker">
					<li className="cursor-pointer hover:text-blue-700 md:text-xl" aria-label="stickers">
						Stickers
					</li>
				</Link>
				<Link href="/category/postcard">
					<li className="cursor-pointer hover:text-blue-700 md:text-xl" aria-label="postcards">
						Postcards
					</li>
				</Link>
                <Link href="/category/collections">
					<li className="cursor-pointer hover:text-blue-700 md:text-xl" aria-label="collections">
						Collections
					</li>
				</Link>
			</ul>
			<div className="flex justify-between items-center gap-4">
				<Searchwrapper />
				<Link href="/cart">
					<ShoppingCartIcon className="w-5 md:w-8 cursor-pointer hover:text-blue-700" aria-label="shopping cart"/>
				</Link>
			</div>
		</nav>
	);
}
