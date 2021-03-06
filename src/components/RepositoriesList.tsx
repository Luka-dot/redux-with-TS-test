import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import './RepositoriesList.styles.css';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();

    // TS does not know what type of data is inside the store example: useSelector((state: any) => state.repositories);
    // in state/reducers/index.ts  added export type for RootState
    // then added custom hook in useTypedSelector.ts
    const { data, error, loading} = useSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            <div className="list">
                {error && <h3>{error}</h3>}
                {loading && <h3>..Loading</h3>}
                {!error && !loading && 
                data.map((name) => 
                    <div key={name}>{name}</div>
                )
                }
            </div>
        </div>
    )
};

export default RepositoriesList;