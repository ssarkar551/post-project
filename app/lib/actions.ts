'use server'
import postgres from "postgres";
import { Product } from "./definition";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: "require"});

export async function getProducts(category?:string, filter?:string) {
    try{
        const data = await sql<Product[]>`SELECT * FROM products WHERE name ILIKE ${'%' + category + '%'} `;
        return data;
    }
    catch(e){
        console.error('fethching products failed: ', e);
        throw new Error('fetching products failed');
    }
    
}