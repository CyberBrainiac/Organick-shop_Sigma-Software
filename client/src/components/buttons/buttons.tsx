import React from "react"
import "./buttons.scss"
import { ButtonCommonType, ButtonLinkType } from "@/types/main-layout-types" 
import { Link } from "react-router-dom";

const ButtonCommon: React.FC<ButtonCommonType> = ({href = "#", target, text, className, id, onClick}) => {
  return (
    <Link to={href}
      id={id}
      className={`${className} button_common`} 
      onClick={onClick}
      target={target}
    >
      {text}
    </Link>
  );
}

const ButtonLink: React.FC<ButtonLinkType> = ({href, text, className, id, onClick}) => {
  return (
    <Link to={href}
    id={id}
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