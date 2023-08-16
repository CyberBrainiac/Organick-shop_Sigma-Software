import "./search.scss"
import { ButtonCommon } from "@/components/buttons/buttons"

function Search() {
	return(
		<div className="search">
			<input type="text" className="search__input" />
			<ButtonCommon className="search__btn" text="" />
		</div>
	)
}

export default Search;