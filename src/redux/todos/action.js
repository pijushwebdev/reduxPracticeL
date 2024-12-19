// for this i am not using this action . i used direct object instead of action.js file
export const todoAdded = (title) => {
    return {
        type: 'todos/todoFetched',
        payload: title
    }
}