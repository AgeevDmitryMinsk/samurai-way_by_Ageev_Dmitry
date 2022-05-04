import {rerenderEntireTree} from "./rerenderEntireTree";
import {store} from "./redux/state";


// ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))


rerenderEntireTree() // для стартовой отрисовки приложения
//для отслеживания в процессе и перерисовки в случае выполнения функций,
// в которых используется функция subscribe:
console.log(`index.tsx`)


store.subscribe(rerenderEntireTree) //  store.subscribe(rerenderEntireTree) равносильно store.subscribe(_onChange)
//т.к. this._onChange = callback, в  subscribe(callback) в state.ts





// <BrowserRouter>
// {/*http://localhost:3000/*/}
// {/*http://localhost:3000/profile*/}
// {/*http://localhost:3000/dialogs*/}
// {/*<HashRouter>*/}
// {/*http://localhost:3000/profile#/profile*/}
// {/*http://localhost:3000/profile#/dialogs*/}
