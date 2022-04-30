import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addPost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


// ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))
ReactDOM.render(
	<BrowserRouter>
		{/*http://localhost:3000/*/}
		{/*http://localhost:3000/profile*/}
		{/*http://localhost:3000/dialogs*/}
		{/*<HashRouter>*/}
		{/*http://localhost:3000/profile#/profile*/}
		{/*http://localhost:3000/profile#/dialogs*/}
	<App state={state} addPost={addPost}/>
	</BrowserRouter>
	, document.getElementById('root'))
