import { ReactNode, MouseEventHandler } from "react"

export interface ButtonCommonType {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonLinkType {
	text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
}

export interface ButtonNavType extends ButtonLinkType {
	id?: string;
}

export interface CountProviderType {
	children: ReactNode,
}

export interface UseCountType {
	countProd: number;
	incProdVal: MouseEventHandler<HTMLButtonElement>;
	decProdVal: MouseEventHandler<HTMLButtonElement>;
}