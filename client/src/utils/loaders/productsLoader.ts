import axios from "axios";

export async function allProductsLoader() {
	const apiUrl = "http://localhost:3000/products";
	let products;

	try {
		products = await axios.get(apiUrl);
	} catch (error: any) {
		if(error.code === "ERR_NETWORK") {
			alert("Woops, server isn`t online");
		} else {
			alert("Internal Server Error ((");
			console.log(error);
			
		}
	}
	products = products?.data;
	
	return { products };
}

export async function productsLoader(id: number) {
	const apiUrl = "http://localhost:3000/products";
	const product = await axios.get(apiUrl, {
		params: {
			id: id,
		}
	});
	return { product };
}