import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./messages-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
//import {StoreType} from "./store";

const rootReducer = combineReducers({
	ProfilePage: profileReducer, // за свойство ProfilePage отвечает profileReducer
	DialogsPage: messagesReducer, // по аналогии
	usersPage: usersReducer
})

export const store = createStore(rootReducer)

//export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store



