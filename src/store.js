import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


// Al aplicar el middleware de thunk, tiene una función extra (withExtraArgument),
// la cual puedes pasar un argumento extra que se va a inyectar en cada uno de los thunks que generemos

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument("hola"))),
);

export default store;   