import { useState } from 'react';
import { actions, useStore } from './store';
import './App.css';

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    const handleDelete = (id) => {
        dispatch(actions.deleteTodo(id));
    };

    const [search, setSearch] = useState('');
    // const handleCheck = (id, checked) => {
    //     dispatch(actions.checkTodo(id, checked));
    // };

    const handleCheck = (id) => {
        dispatch(actions.checkTodo(id));
    };

    return (
        <div className="App">
            <h2>Todo list</h2>
            <div>
                <input
                    value={todoInput}
                    placeholder="Enter Todo"
                    onChange={(e) => {
                        dispatch(actions.setTodoInput(e.target.value));
                    }}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <span>Search</span>
                <input
                    placeholder="Enter keywords "
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {todos
                .filter((e) => e.title.includes(search))
                .map(({ id, title, status }) => (
                    <li key={id}>
                        {status ? (
                            <strike>{title}</strike>
                        ) : (
                            <span>{title}</span>
                        )}

                        {/* <input
                        type="checkbox"
                        onChange={(e) => {
                            handleCheck(id, e.currentTarget.checked);
                        }}
                    /> */}

                        <input
                            type="checkbox"
                            checked={!!status}
                            onChange={(e) => handleCheck(id)}
                        />

                        <span onClick={() => handleDelete(id)}>&times;</span>
                    </li>
                ))}
        </div>
    );
}

export default App;
