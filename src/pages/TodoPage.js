import { useState } from 'react';
import { actions, useStore } from '../store';

function TodoPage() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const [filter, setFilter] = useState('all');

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    const handleDelete = (id) => {
        dispatch(actions.deleteTodo(id));
    };

    const [search, setSearch] = useState('');

    const handleCheck = (id) => {
        dispatch(actions.checkTodo(id));
    };

    return (
        <div>
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

            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('complete')}>Complete</button>
                <button onClick={() => setFilter('incomplete')}>
                    Incomplete
                </button>
            </div>

            {todos
                .filter((e) => e.title.includes(search))
                .filter((e) => {
                    if (filter === 'all') return true;
                    if (filter === 'complete') return e.status === true;
                    if (filter === 'incomplete') return e.status === false;
                })
                .map(({ id, title, status }) => (
                    <li key={id}>
                        {status ? (
                            <strike>{title}</strike>
                        ) : (
                            <span>{title}</span>
                        )}

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

export default TodoPage;
