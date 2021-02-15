import { ActionType } from '../action-types/index';

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
};

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
};

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string
};

// this is called type union
export type Action = 
    | SearchRepositoriesAction 
    | SearchRepositoriesSuccessAction 
    | SearchRepositoriesErrorAction 

// interface Action {
//     type: string,
//     payload?: any
// }
// (state, action):RepositoryState in this case ensuring what is returned from any case is right format.
//const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
