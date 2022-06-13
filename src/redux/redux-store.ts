import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {messagesReducer} from "./messages-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
	ProfilePage: profileReducer, // за свойство ProfilePage отвечает profileReducer
	DialogsPage: messagesReducer, // по аналогии
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer, // за свойство form отвечает formReducer из библиотеки redux-form 2016
	app: appReducer
})


//подключаем расширение Redux Devtools
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const store = createStore(rootReducer, applyMiddleware(thunk)) // <- было до подключения Redux Devtools
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


//export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
// window.store = store



