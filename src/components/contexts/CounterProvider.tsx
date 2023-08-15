import { createContext, useContext, useState } from "react"
import { CountProviderType, UseCountType } from '@/types/main-layout-types'

const CountProductsContext = createContext<UseCountType>({countProd: 0, incProdVal: ()=>{}, decProdVal: ()=>{}});

function CounterProvider({children} : CountProviderType) {
	const [countProd, changeProdVal] = useState(0);

	function incProdVal() {
		const newVal = countProd + 1;
		changeProdVal(newVal);
	}

	function decProdVal() {
		const newVal = countProd - 1;

		if(newVal === -1) {
			throw new Error("Prodact count in cart can`t be less then 0");
		}

		changeProdVal(newVal);
	}

	const value = {
		countProd,
		incProdVal,
		decProdVal,
	}

	return(
		<CountProductsContext.Provider value={value}>
			{children}
		</CountProductsContext.Provider>
	)
}


function useCount():UseCountType {
	return useContext(CountProductsContext);
}

export {
	CounterProvider, 
	useCount,
}