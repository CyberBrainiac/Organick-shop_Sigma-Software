import About from "./common.blocks/about/About";
import Hero from "./common.blocks/hero/Hero";
import OfferBanner from "./common.blocks/offer-banner/OfferBanner";

export default function Home() {
	return (
		<section className='home'>
			<Hero />
			<OfferBanner />
			<About />
    </section>
  );
}

