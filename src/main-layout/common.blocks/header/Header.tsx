import "./header.scss"
import { ButtonNav } from "@components/buttons/buttons"
import Logo from "./logo/Logo"

export default function Header() {
  return(
    <div className="header">
			<Logo />

      <ButtonNav text="Home" href="/" />
      <ButtonNav text="Sifon" href="/sifon" />
    </div>
  )
}