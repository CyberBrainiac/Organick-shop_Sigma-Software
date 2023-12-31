import axios from "axios";
import { loadersErrorHandler } from "../errorHandlers/loadersErrorHandler";
import { ProductType } from "@/types/main-types";

export async function allProductsLoader() {
	const apiUrl = "http://localhost:3200/products";
	let response;
	
	try {
		response = await axios.get(apiUrl);
	} catch (error: any) {
		loadersErrorHandler(error);
	}
	const products = response?.data as ProductType[];

	/**Set products to Session storage*/
	if(!sessionStorage.getItem("loadedProducts")) {
		sessionStorage.setItem("loadedProducts", "[]");
	}
	
	sessionStorage.setItem("loadedProducts", JSON.stringify(products));

	return { products };
}

export async function productLoader(id: number) {
	const apiUrl = "http://localhost:3200/products";
	let response;

	/**Get saved product from session storage*/
	const rawloadedProducts: string = sessionStorage.getItem("loadedProducts")!;
	const loadedProducts: ProductType[] = JSON.parse(rawloadedProducts);
	const targetProduct = loadedProducts.find(product => product.idProduct === id);

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