import { useEffect, useState } from 'react';
console.log('Pre-render');
const Lifecycle = () => {
	console.log('Logic-render');
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		console.log('useEffect default');
		return () => {
			console.log('se desmonto el componente');
		};
	});
	useEffect(() => {
		console.log('useEffect sin dependencias []');
	}, []);
	useEffect(() => {
		console.log('useEffect con dependencias [counter1]');
	}, [counter1]);
	useEffect(() => {
		console.log('useEffect con dependencias [counter1,counter2]');
	}, [counter1, counter2]);

	return (
		<div>
			{console.log('return-render')}
			<h2>Lifecycle</h2>
			<h4>Counter1: {counter1}</h4>
			<h4>Counter2: {counter2}</h4>
			<button onClick={() => setCounter1(counter1 + 1)}>Counter1</button>
			<button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>
		</div>
	);
};

export default Lifecycle;
