import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";
//import {StateType} from "./index";
//import {store} from "./redux/state";

export const rerenderEntireTree = () => {
	//console.log(`rerenderEntireTree`)

	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				{/*<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>*/}
				{/*<App store={store}/>*/}
				<App />
			</Provider>

		</BrowserRouter>
		, document.getElementById('root'))
}





