import "./mainLayout.scss"
import { Outlet } from "react-router-dom"
import Header from "./common.blocks/header/Header"
import Footer from "./common.blocks/footer/Footer"
import { CounterProvider } from "@/components/contexts/CounterProvider"

function MainLayout() {
  return(
		<CounterProvider>
			<section className="main-layout">
				<Header />
				<Outlet />
				<Footer />
			</section>
		</CounterProvider>
  );
}

export default MainLayout;