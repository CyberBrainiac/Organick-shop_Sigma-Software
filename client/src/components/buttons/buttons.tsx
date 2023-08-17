import React from "react"
import "./buttons.scss"
import { ButtonCommonType, ButtonLinkType } from "@/types/main-layout-types" 
import { Link } from "react-router-dom";

const ButtonCommon: React.FC<ButtonCommonType> = ({text, className = "", onClick}) => {
  return (
    <button 
      className={`${className} button_common`} 
      onClick={onClick} 
    >{text}</button>
  );
}

const ButtonLink: React.FC<ButtonLinkType> = ({href, text, className = "", onClick}) => {
  return (
    <Link to={href}
    className={`${className} button_link`} 
    onClick={onClick} 
    >
			{text}
			<div className="button_link-arrow"></div>
		</Link>
  );
}

export {
  ButtonCommon,
	ButtonLink,
}