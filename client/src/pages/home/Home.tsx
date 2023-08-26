import About from "./common.blocks/about/About"
import Hero from "./common.blocks/hero/Hero"
import OfferBanner from "./common.blocks/offer-banner/OfferBanner"
import Products from "./common.blocks/products/Products"
import { useLoaderData } from "react-router-dom"
import { ProductsProps } from "@/types/main-layout-types"
import Testimonials from "./common.blocks/testimonials/Testimonials"

function Home() {
	const { products } = useLoaderData() as ProductsProps;
  console.log("Save data to session storge!");

	return (
		<section className='home'>
			<Hero />
			<OfferBanner />
			<About />
			<Products products={products} />
			<Testimonials />
    </section>
  );
}

export default Home;
