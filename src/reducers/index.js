import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {todos} from './todos'
import {searchWord} from './searchWord'
import{displayHashedTodo} from './displayHashedTodo'


const persisitConfig ={
    key: 'root',
    storage,
    whitelist: ['todos']
}


const rootReducer = combineReducers({
 todos,
 searchWord,
 displayHashedTodo
})

export default persistReducer(persisitConfig,rootReducer);