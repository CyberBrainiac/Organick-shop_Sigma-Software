import { ReactNode, MouseEventHandler } from "react"

export interface ButtonCommonType {
  text: string;
  href: string;
	id?: string;
  className?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export interface ButtonLinkType {
	text: string;
  href: string;
  target?: string;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface CountProviderType {
	children: ReactNode,
}

export interface UseCountType {
	countProd: number;
	incProdVal: MouseEventHandler<HTMLButtonElement>;
	decProdVal: MouseEventHandler<HTMLButtonElement>;
}