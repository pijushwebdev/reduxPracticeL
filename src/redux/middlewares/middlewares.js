// import { useDispatch } from "react-redux"



// eslint-disable-next-line no-unused-vars
export const fetchTodoMiddleware = (store) => (next) => (action) => {
    // const dispatch = useDispatch();
    if(action.type === 'todos/todoFetched'){
        
        

        return;
    }

    return next(action)
}

