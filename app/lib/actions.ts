"use server";
import postgres from "postgres";
import { Product } from "./definition";
import { unstable_cache } from "next/cache";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const _getProducts = async (category?: string, filter?: string) => {
	try {
		const data = await sql<
			Product[]
		>`SELECT * FROM products WHERE name ILIKE ${"%" + (category ?? "") + "%"} `;
		return data;
	} catch (e) {
		console.error("fethching products failed: ", e);
		throw new Error("fetching products failed");
	}
};

const getProductsCached = unstable_cache(_getProducts, ["products"], {
	revalidate: 300,
	tags: ["products"],
});

export async function getProducts(category?: string, filter?: string) {
	return getProductsCached(category, filter);
}
