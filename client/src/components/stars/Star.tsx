import "./star.scss"
import { StarProps } from "@/types/main-types";

function Star(props: StarProps) {
  return(
    <div className={props.filled ? "star star_filled" : "star"}></div>
  )
}

export default Star;