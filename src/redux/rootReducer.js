
import { combineReducers } from "redux";
import { productsReducer } from "./products/productsReducer";
import { todoReducer } from "./todos/todoReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    todos: todoReducer,
})

export default rootReducer;