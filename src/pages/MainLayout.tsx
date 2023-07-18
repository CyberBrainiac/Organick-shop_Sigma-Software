import "./mainLayout.scss"

import { Outlet } from "react-router-dom"
import { ButtonLink } from "../components/buttons/buttons"

export default function MainLayout() {
  return(
    <section className="mainLayout">
      <h1>Main Layout</h1>
      <ButtonLink text="Home" href="/" />
      <ButtonLink text="Registration" href="/registration" />
      <Outlet /> 
    </section>
  );
}