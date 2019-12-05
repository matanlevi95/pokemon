import { createStore, applyMiddleware, compose } from "redux"
import root from "./reducers"
import thunk from "redux-thunk"

function saveToLocalStorage(store) {    
    const {userLoginDetails} = store
    try {
        const state = JSON.stringify(userLoginDetails)
        localStorage.setItem("state", state)
    } catch (err) {
        console.log(err);
    }
}

const composeA = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    root,
    composeA(applyMiddleware(thunk))
)


store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;