import { ButtonLink, ButtonCommon } from "@/components/buttons/buttons"

export default function Header() {
  return(
    <div className="header">
      <h1>Main Layout</h1>
      {/* <ButtonLink text="Home" href="/" /> */}
      <ButtonLink text="Registration" href="/registration" />
      <ButtonCommon text="Registration" />
    </div>
  )
}