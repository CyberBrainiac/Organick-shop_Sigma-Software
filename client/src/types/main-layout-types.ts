import { ReactNode, MouseEventHandler } from "react"

export interface ButtonType {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonCommonType {
  text: string;
  href: string;
	id?: string;
  className?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
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
  idProduct: number;
  categories: string[];
  imgUrl: string;
  name: string;
  price: number;
  discount?: number;
  stars: number;
  shortDescription: string;
  productDescription: string;
  additionalInfo: string;
}

export interface ProductCardProps {
  product: ProductType;
}

export interface ModalProductCardProps extends ProductCardProps{
  isOpen: boolean;
  onClose: () => void;
}

export interface ProductsProps {
  products: ProductType[];
}

export interface StarProps {
  filled: boolean;
}

export interface Testimonial {
  id: number;
  avatarUrl: string;
  stars: number;
  testimonial: string;
  name: string;
  role: string;
}

export interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}
