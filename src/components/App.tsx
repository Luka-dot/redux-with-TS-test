import { Provider } from 'react-redux';
import { store } from '../state/index';
import RepositoriesList from './RepositoriesList';

const App = () => {
    return (
        <Provider store={store}>
            <h2>Search for NPM package.</h2>
            <RepositoriesList />
        </Provider>
    )
};

export default App;