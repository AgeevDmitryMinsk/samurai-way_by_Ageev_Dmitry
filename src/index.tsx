import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import {AppWithHooks} from "./AppWithHooks";
//import App from "./App";




ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			{/*<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>*/}
			{/*<App store={store}/>*/}
			{/*<App/>*/}
			<AppWithHooks/>
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
