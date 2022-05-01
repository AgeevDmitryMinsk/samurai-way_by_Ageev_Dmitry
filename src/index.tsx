import {addPost, changeTextareaTitle, state, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


// ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))

export let rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} changeTextareaTitle={changeTextareaTitle}/>
		</BrowserRouter>
		, document.getElementById('root'))
}
rerenderEntireTree(state)

// <BrowserRouter>
// {/*http://localhost:3000/*/}
// {/*http://localhost:3000/profile*/}
// {/*http://localhost:3000/dialogs*/}
// {/*<HashRouter>*/}
// {/*http://localhost:3000/profile#/profile*/}
// {/*http://localhost:3000/profile#/dialogs*/}
