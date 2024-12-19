


// eslint-disable-next-line no-unused-vars
export const fetchTodoMiddleware = (store) => (next) => async (action) => {
   console.log('delay applying');
    if(action.type === 'todos/todoAdded'){
        
        setTimeout(() => {
            next(action)
        }, 2000)
        console.log('checked');
        return;
    }

    return next(action)
}
// export const fetchTodoMiddleware = (store) => (next) => async (action) => {   // node project
//     
//     if(action.type === 'todos/todoFetched'){
        
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
//         const todos = await res.json();
//         store.dispatch({
//             type: 'todos/todoAdded',
//             payload: todos
//         })
//         console.log('fetched');
//         return;
//     }

//     return next(action)
// }

