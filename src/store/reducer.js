import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELELTE_TODO,
    CHECK_TODO,
} from './constants';

const initState = {
    todos: [
        {
            id: '1',
            title: 'Study React',
            status: false,
        },
    ],
    todoInput: '',
};

let nextId = 1;

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextId++,
                        title: action.payload,
                        status: false,
                    },
                ],
            };
        case DELELTE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo.id !== action.id)],
            };
        // case CHECK_TODO:
        //     const newState = { ...state };
        //     const index = newState.todos.findIndex(
        //         (todo) => todo.id === action.id,
        //     );
        //     newState.todos[index].status = action.checked;

        //     return newState;

        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, status: !todo.status }
                        : todo,
                ),
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
