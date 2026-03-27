import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemProps } from "../lib/definition";

export function NavItem({ href, label, onClick }: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname===href;
	return (
		<li>
			<Link
				href={href}
				onClick={onClick}
				className={`text-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:text-blue-700 ${isActive ? "text-blue-900 font-semibold" : ""}`}
			>
				{label}
			</Link>
		</li>
	);
}
