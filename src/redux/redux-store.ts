import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer} from "./messages-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
//import {StoreType} from "./store";

const rootReducer = combineReducers({
	ProfilePage: profileReducer, // за свойство ProfilePage отвечает profileReducer
	DialogsPage: messagesReducer, // по аналогии
	usersPage: usersReducer,
	auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store



