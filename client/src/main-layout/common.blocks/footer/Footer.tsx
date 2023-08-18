import { Link } from "react-router-dom";
import Logo from "@/components/logo/Logo";
import "./footer.scss"
import { ButtonCommon } from "@/components/buttons/buttons";

function Footer() {
	return(
		<footer className="footer">
			<div className="footer__wrap">
				<div className="footer__block footer__block_contact">
					<h5>Contact Us</h5>
					<div className="footer__link-wrap">
						<p className="footer__link-text footer_bold-text">Email</p>
						<p>arsenij.arxipov.1998@gmail.com</p>
					</div>
					<div className="footer__link-wrap">
						<p className="footer__link-text footer_bold-text">Phone</p>
						<a href="tel:+380338887711">+(38) 033-888-77-11</a>
					</div>
					<div className="footer__link-wrap">
						<p className="footer__link-text footer_bold-text">Address</p>
						<Link 
							className="footer__link-location"
							target="_blank"
							to={"https://www.google.com/maps/place/88th+St,+Brooklyn,+NY,+%D0%A1%D0%A8%D0%90/@40.6219333,-74.0337219,17z/data=!3m1!4b1!4m6!3m5!1s0x89c24f8a621ff737:0x63b87b08f5ac9099!8m2!3d40.6219293!4d-74.031147!16s%2Fg%2F1tm8fx3q?entry=ttu"}>
							<p className="footer__link">88 road, borklyn street, USA</p>
						</Link>
					</div>
				</div>

				<div className="footer__block footer__block_socials">
					<Logo />
					<p className="footer__link-text">Simply dummy text of the printing and typesetting industry.</p>
					<p className="footer__link-text">Lorem Ipsum simply dummy text of the printing.</p>
					<div className="footer__socials-wrap">
						<ButtonCommon target="_blank" text="" href="https://www.instagram.com/" className="footer__link-btn" id="footer-instagram" />
						<ButtonCommon target="_blank" text="" href="https://www.facebook.com/" className="footer__link-btn" id="footer-facebook" />
						<ButtonCommon target="_blank" text="" href="https://twitter.com/" className="footer__link-btn" id="footer-twitter" />
						<ButtonCommon target="_blank" text="" href="https://www.pinterest.com/" className="footer__link-btn" id="footer-pinterest" />
					</div>
				</div>

				<div className="footer__block footer__block_utility">
					<h5 className="footer__heading">Utility Pages</h5>
					<Link to={"/style-guide"}><p className="footer__link">Style Guide</p></Link>
					<Link to={"/page-not-found"}><p className="footer__link">404 Not Found</p></Link>
					<Link to={"/password-protected"}><p className="footer__link">Password Protected</p></Link>
					<Link to={"/licences"}><p className="footer__link">Licences</p></Link>
					<Link to={"/changelog"}><p className="footer__link">Changelog</p></Link>
				</div>
			</div>

			<div className="footer__copyright">
				<p>
					Copyright © 
					{" "}<span className="footer_bold-text">Organick</span>{" "} 
					| Designed by 
					{" "}<span className="footer_bold-text">VictorFlow</span>{" "} 
					Templates - Powered by 
					{" "}<span className="footer_bold-text">Webflow</span>{" "} 
				</p>
			</div>
		</footer>
	);
}

export default Footer;