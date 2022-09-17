import { actions, useStore } from './store';

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    return (
        <div>
            <h2>Todo list</h2>
            <input
                value={todoInput}
                placeholder="Enter Todo"
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={handleAdd}>Add</button>

            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    );
}

export default App;
