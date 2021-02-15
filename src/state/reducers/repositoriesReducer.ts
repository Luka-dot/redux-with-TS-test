interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
};

interface Action {
    type: string,
    payload?: any
}

// (state, action):RepositoryState in this case ensuring what is returned from any case is right format.
const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    switch (action.type) {
        case 'search_repositories':
            return { loading: true, error: null, data: []};

        case 'earch_repositories_success':
            return { loading: false, error: null, data: action.payload };

        case 'earch_repositories_error':    
            return { loading: false, error: action.payload, data: [] };

        default:
            return state;
    }
};

export default reducer;