import React from "react"
import "./buttons.scss"
import { ButtonCommonType, ButtonLinkType, ButtonType } from "@/types/main-layout-types" 
import { Link } from "react-router-dom";

const Button: React.FC<ButtonType> = ({text, className, onClick}) => {
  return(
    <button
      className={`${className} button`}
      onClick={onClick}
    >
      <h6>{text}</h6>
    </button>
  );
}

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
  Button,
  ButtonCommon,
	ButtonLink,
}