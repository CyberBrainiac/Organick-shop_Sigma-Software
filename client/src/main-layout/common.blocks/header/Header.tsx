import "./header.scss"
import CartNav from "./cartNav/CartNav"
import Logo from "@/components/logo/Logo"
import Nav from "./nav/Nav"
import Search from "./search/Search"

export default function Header() {
  return(
    <header className="header">
			<Logo />
			<Nav />
			<div className="header_search-cart-wrap">
				<Search />
				<CartNav />
			</div>
    </header>
  )
}