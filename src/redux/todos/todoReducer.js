const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoFetched':
            
            return {
                ...state,
                todos: [ ...state.todos,action.payload ]
            }
    
        default:
            return state;
    }
}