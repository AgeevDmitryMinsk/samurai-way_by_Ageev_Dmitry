import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

const rootReducer = combineReducers({
	ProfilePage: profileReducer, // за свойство ProfilePage отвечает profileReducer
	DialogsPage: messagesReducer // по аналогии
})

export const store = createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
