import "./offer-banner.scss"

function OfferBanner() {
	return(
		<div className="offer-banner">
			<div className="offer-banner__container" id="offer-banner__container-1">
				<div className="offer-banner__content">
					<p className="offer-banner__tegline">natural!!</p>
					<h3 className="offer-banner__heading">Get Garden<br />Fresh Fruits</h3>
				</div>
			</div>
			<div className="offer-banner__container" id="offer-banner__container-2">
				<div className="offer-banner__content">
					<p className="offer-banner__tegline">offer!!</p>
					<h3 className="offer-banner__heading">Get 10% off<br />on Vegetables</h3>
				</div>
			</div>
		</div>
	);
}

export default OfferBanner;