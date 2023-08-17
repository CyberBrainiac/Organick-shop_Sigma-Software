import "./mainLayout_ErrorPage.scss"
import { ButtonLink } from "@/components/buttons/buttons"

function MainLayout_ErrorPage() {
	return(
		<div className="main-errorPage">
			<div className="main-errorPage_decore-nut"></div>
			<div className="main-errorPage_decore-small-leaf"></div>
			<div className="main-errorPage_decore-strange-leaf"></div>
			<div className="main-errorPage_decore-onion"></div>

			<div className="main-errorPage__content">
				<img className="main-errorPage__error-img" src="/src/assets/images/Main-ErrorPage-404.svg" alt="404 Error - page is not found" />
				<h1>Page not found</h1>
				<p className="main-errorPage__description">The page you are looking for doesn't exist or has been moved</p>
				<ButtonLink className="main-errorPage__btn" text="Go to Homepage" href="/" />
			</div>
		</div>
	);
}

export default MainLayout_ErrorPage;