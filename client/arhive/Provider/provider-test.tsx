import { useCount } from "@/components/contexts/CounterProvider";
function TestComp() {
	const { countProd, incProdVal, decProdVal } = useCount();

	return(
		<>
			<button onClick={incProdVal}>INCREMENT COUNT</button>
			<button onClick={decProdVal}>DECREMENT COUNT</button>
		</>
	)
}