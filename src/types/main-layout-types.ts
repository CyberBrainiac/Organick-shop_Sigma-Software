import { ReactNode, MouseEventHandler } from "react"

export interface CountProviderType {
	children: ReactNode,
}

export interface UseCountType {
	countProd: number;
	incProdVal: MouseEventHandler<HTMLButtonElement>;
	decProdVal: MouseEventHandler<HTMLButtonElement>;
}