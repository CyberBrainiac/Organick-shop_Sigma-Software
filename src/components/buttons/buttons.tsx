import React from "react";
import "./buttons.scss";

interface ButtonCommonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
interface ButtonNavProps {
  text: string;
  className?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ButtonCommon: React.FC<ButtonCommonProps> = ({text, className = "", onClick}) => {
  return (
    <button 
      className={`${className} button_common`} 
      onClick={onClick} 
    >{text}</button>
  );
}

const ButtonNav: React.FC<ButtonNavProps> = ({href, text, className = "", onClick}) => {
  return (
    <a href={href}
    className={`${className} button_nav`} 
    onClick={onClick} 
    >{text}</a>
  );
}

export {
  ButtonCommon,
  ButtonNav,
}