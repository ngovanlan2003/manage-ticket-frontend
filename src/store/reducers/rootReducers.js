import { combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import CarReducers from "./CarReducers";
import TripReducers from "./TripReducers";
import UserReducers from "./UserReducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = combineReducers({
    cars: CarReducers,
    trips: TripReducers,
    users: UserReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducers)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)