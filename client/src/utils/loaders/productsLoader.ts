import { getAllProduct } from "@/utils/requests/getProducts"

export async function productsLoader() {
	const products = await getAllProduct();
	return { products };
}