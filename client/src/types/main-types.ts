import { ReactNode } from "react"

export interface ButtonType {
  text: string;
  type?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonCommonType {
  text: string;
  href: string;
	id?: string;
  className?: string;
  type?: string;
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

export interface ProviderChildren {
	children: ReactNode,
}

export interface UseCountType {
	countProd: number;
	addProdVal: (count: number) => void;
	removeProdVal: (count: number) => void;
  setProdVal: (count: number) => void;
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

export interface ProductsProps {
  products: ProductType[];
}

export interface ModalProductCardProps extends ProductCardProps{
  isOpen: boolean;
  onClose: () => void;
}

export interface CartProductsProps extends ProductCardProps {
  quantity: number;
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

export interface SavedProductType {
  idProduct: number;
  quantity: number; 
  product: ProductType; 
}

export interface ProductContextType {
  getProducts: SavedProductType[];
  modifyProduct: (props: ModifyProductProps) => void;
  addProduct: (props: SavedProductType) => void;
}

export interface CardProductProps {
  quantity: number;
  product: ProductType;
  onDelete: (idProduct: number) => void;
  onUpdateInpt: (idProduct: number, newQuantity: number) => void;
}

export interface ModifyProductProps {
  action: string;
  idProduct: number;
  quantityDifference?: number;
}

export interface UserInfoType {
  address: string;
  email: string;
  message: string;
  name: string;
  phoneNumber: string;
}

export interface FormProps {
  orderProducts: SavedProductType[];
  userInfo: UserInfoType;
}