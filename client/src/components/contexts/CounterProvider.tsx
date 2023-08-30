import { createContext, useContext, useState } from "react"
import { ProviderChildren, UseCountType } from '@/types/main-types'

const CountProductsContext = createContext<UseCountType>({countProd: 0, addProdVal() {}, removeProdVal() {}});

function CounterProvider({children}: ProviderChildren) {
	const [countProd, changeProdVal] = useState(0);

	function addProdVal(count: number) {
		changeProdVal((prevValue) => prevValue + count);
	}

	function removeProdVal(count: number) {
		const currentCount = countProd - count;

		if(currentCount < 0) {
			throw new Error("Product count in cart can`t be less then 0");
		}

		changeProdVal((prevValue) => prevValue - count);
	}

	const value = {
		countProd,
		addProdVal,
		removeProdVal,
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