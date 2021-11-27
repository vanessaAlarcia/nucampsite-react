import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return state;
};