import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const useActions = () => {
    const dispatch = useDispatch();

    // this function provides back {} with all the actionCreators bind to dispatch
    // example  { searchRepositories: dispatch(searchRepositories)}
    return bindActionCreators(actionCreators, dispatch);
};