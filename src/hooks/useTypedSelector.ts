import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// this can be vound react-redux doc -> Static Typing

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;