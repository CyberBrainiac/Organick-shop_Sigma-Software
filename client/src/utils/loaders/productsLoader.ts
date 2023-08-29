import axios from "axios";
import { loadersErrorHandler } from "./loadersErrorHandler";
import { ProductType } from "@/types/main-layout-types";

export async function allProductsLoader() {
	const apiUrl = "http://localhost:3000/products";
	let response;
	
	try {
		response = await axios.get(apiUrl);
	} catch (error: any) {
		loadersErrorHandler(error);
	}
	const products = response?.data as ProductType[];

	/**Set products to Session storage*/
	if(!sessionStorage.getItem("selectedProducts")) {
		sessionStorage.setItem("selectedProducts", "[]");
	}
	
	sessionStorage.setItem("selectedProducts", JSON.stringify(products));

	return { products };
}

export async function productLoader(id: number) {
	const apiUrl = "http://localhost:3000/products";
	let response;

	/**Get saved product from session storage*/
	const rawSelectedProducts: string = sessionStorage.getItem("selectedProducts")!;
	const selectedProducts: ProductType[] = JSON.parse(rawSelectedProducts);
	const targetProduct = selectedProducts.find(product => product.idProduct === id);

	if(targetProduct) {
		return targetProduct;
	};

	/**Get product from server*/
	try {
		response = await axios.get(apiUrl, {
			params: {
				id: id,
			}
		});
	} catch (error) {
		loadersErrorHandler(error);
	}
	const [ product ] = response?.data;
	
	return product;
}