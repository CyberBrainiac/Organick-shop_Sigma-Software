import "./mainLayout.scss"
import { Outlet } from "react-router-dom"
import Header from "./common.blocks/header/Header"
import Footer from "./common.blocks/footer/Footer"

export default function MainLayout() {
  return(
    <section className="layout">
      <Header />
      <Outlet /> 
			<Footer />
    </section>
  );
}