import { config } from "dotenv";
config({ path: ".env" })
import postgres from "postgres";
import { products } from "../lib/dummydata";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seed() {
	for (const p of products) {
		await sql`
        INSERT INTO products (id, name, price, original_price, on_sale, url, image_url, alt)
        VALUES (${p.id}, ${p.name}, ${p.price}, ${p.original_price || null}, ${p.on_sale || false}, ${p.url}, ${p.image_url}, ${p.alt})
        ON CONFLICT (id) DO NOTHING
    `;
	}
	console.log("seeding done");
	process.exit();
}

seed();
