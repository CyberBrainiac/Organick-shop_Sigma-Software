import React from "react";
import "./buttons.scss";

interface ButtonCommonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonCommon: React.FC<ButtonCommonProps> = ({text, className = "", onClick}) => {
  return (
    <button 
      className={`${className} common-button`} 
      onClick={onClick} 
    >{text}</button>
  );
}


interface ButtonLinkProps {
  text: string;
  className?: string | undefined;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({href, text, className = "", onClick}) => {
  return (
    <a href={href}
    className={`${className} link-button`} 
    onClick={onClick} 
    >{text}</a>
  );
}

export {
  ButtonCommon,
  ButtonLink,
}