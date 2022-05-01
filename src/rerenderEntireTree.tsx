import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, changeTextareaTitle, state} from "./redux/state";
import React from "react";

export const rerenderEntireTree = () => {
	console.log(`rerenderEntireTree`)
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>
		</BrowserRouter>
		, document.getElementById('root'))
}
console.log(2, `rerenderEntireTree`)


