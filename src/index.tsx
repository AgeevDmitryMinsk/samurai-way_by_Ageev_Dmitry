import {rerenderEntireTree} from "./rerenderEntireTree";
import {store} from "./redux/state";


// ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))

store.subscribe(rerenderEntireTree)

//subscribe(rerenderEntireTree)
//console.log(1, `index.tsx`)

// <BrowserRouter>
// {/*http://localhost:3000/*/}
// {/*http://localhost:3000/profile*/}
// {/*http://localhost:3000/dialogs*/}
// {/*<HashRouter>*/}
// {/*http://localhost:3000/profile#/profile*/}
// {/*http://localhost:3000/profile#/dialogs*/}
