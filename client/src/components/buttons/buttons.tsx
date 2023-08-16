import React from "react"
import "./buttons.scss"
import { ButtonCommonType, ButtonNavType, ButtonLinkType } from "@/types/main-layout-types" 

const ButtonCommon: React.FC<ButtonCommonType> = ({text, className = "", onClick}) => {
  return (
    <button 
      className={`${className} button_common`} 
      onClick={onClick} 
    >{text}</button>
  );
}

const ButtonNav: React.FC<ButtonNavType> = ({href, text, className = "", onClick}) => {
  return (
    <a href={href}
    className={`${className} button_nav`} 
    onClick={onClick} 
    >{text}</a>
  );
}

const ButtonLink: React.FC<ButtonLinkType> = ({href, text, className = "", onClick}) => {
  return (
    <a href={href}
    className={`${className} button_link`} 
    onClick={onClick} 
    >
			{text}
			<div className="button_link-arrow"></div>
		</a>
  );
}

export {
  ButtonCommon,
  ButtonNav,
	ButtonLink,
}