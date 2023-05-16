import { useState } from 'react';

const Lifecycle = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	return (
		<div>
			<h2>Lifecycle</h2>
			<h4>Counter1: {counter1}</h4>
			<h4>Counter2: {counter2}</h4>
			<button>Counter1</button>
			<button>Counter2</button>
		</div>
	);
};

export default Lifecycle;
