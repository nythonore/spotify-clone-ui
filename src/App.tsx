import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from '@/Router';
import { store } from '@/lib';
import { AppProvider } from '@/providers';

const App = () => {
	return (
		<AppProvider>
			<Provider store={store}>
				<RouterProvider router={Router} />
			</Provider>
		</AppProvider>
	);
};

export default App;
