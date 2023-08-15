import { useCount } from "@/components/contexts/CounterProvider";

export default function Home() {
  return (
    <div className='home'>
      <h3 className='home__title'>This is the homepage</h3>
			<TestComp />
    </div>
  );
}

function TestComp() {
	const { countProd, incProdVal, decProdVal } = useCount();

	return(
		<>
			<button onClick={incProdVal}>INCREMENT COUNT</button>
			<button onClick={decProdVal}>DECREMENT COUNT</button>
		</>
	)
}