import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();

  
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "todos/todoFetched",
            payload: "Learning Redux with react",
          })
        }
      >
        Fetch
      </button>
    </div>
  );
};

export default Todo;