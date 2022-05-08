import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
//import {store} from "./redux/store";

export const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			{/*<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>*/}
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
		, document.getElementById('root'))
}





