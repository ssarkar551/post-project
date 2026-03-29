"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "../lib/hooks";
import { CartItem } from "../lib/definition";

export default function Page() {
	const items = useAppSelector((state) => state.cart.items);
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
			{items.map((item) => (
                <article key={item.id}>
                    <h3>{item.name}</h3>
                </article>
            ))}
		</div>
	)
}
