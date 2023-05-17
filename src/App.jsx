import { useState } from 'react';
import FetchAPI from './components/FetchAPI';
import Lifecycle from './components/Lifecycle';

const App = () => {
	const [showLifecycle, setShowLifecycle] = useState(false);
	return (
		<div>
			{showLifecycle && <Lifecycle />}
			<button onClick={() => setShowLifecycle(!showLifecycle)}>
				{showLifecycle ? 'Ocultar' : 'Mostrar'}
			</button>
			<FetchAPI />
		</div>
	);
};

export default App;
