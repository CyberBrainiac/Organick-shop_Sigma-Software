import "./mainLayout.scss"
import "@/utils/auth/sign-up"
import { Outlet } from "react-router-dom"
import Header from "./common.block/header/Header";

export default function MainLayout() {
  return(
    <section className="mainLayout">
      <Header />
      <Outlet /> 
    </section>
  );
}