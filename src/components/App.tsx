import { Provider } from 'react-redux';
import { store } from '../state/index';
import RepositoriesList from './RepositoriesList';

import './app.styles.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <h2>Search for NPM package.</h2>
                <RepositoriesList />
            </div>
        </Provider>
    )
};

export default App;