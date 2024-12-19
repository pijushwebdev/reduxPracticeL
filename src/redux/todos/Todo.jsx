import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "todos/todoAdded",
          })
        }
      >
        Fetch
      </button>
    </div>
  );
};

export default Todo;
