//import {rerenderEntireTree} from "./rerenderEntireTree";
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import React from "react";
//import {store} from "./redux/state";
// ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))
//export type StateType = ReturnType<typeof store.getState>
//let state: StateType = store.getState()


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			{/*<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>*/}
			{/*<App store={store}/>*/}
			<App/>
		</Provider>

	</BrowserRouter>
	, document.getElementById('root'))

//rerenderEntireTree() // для стартовой отрисовки приложения  - нужен если без connect,
// т.к. у connect библиотеки react-redux есть свой локальный метод subscribe
//store.subscribe(rerenderEntireTree)
//для отслеживания в процессе и перерисовки в случае выполнения функций,
// в которых используется функция subscribe:
//console.log(`index.tsx`)


// <BrowserRouter>
// {/*http://localhost:3000/*/}
// {/*http://localhost:3000/profile*/}
// {/*http://localhost:3000/dialogs*/}
// {/*<HashRouter>*/}
// {/*http://localhost:3000/profile#/profile*/}
// {/*http://localhost:3000/profile#/dialogs*/}
