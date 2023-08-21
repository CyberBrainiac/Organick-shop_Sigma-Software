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

export interface LoadMoreType {
  (event: React.MouseEvent<HTMLAnchorElement>): void;
}

export interface ProductType {
  id: number;
  categories: string[];
  imgUrl: string;
  name: string;
  price: number;
  discount?: number;
  stars: number;
}

export interface ProductCardProps {
  product: ProductType;
}

export interface ProductsProps {
  products: ProductType[];
}
