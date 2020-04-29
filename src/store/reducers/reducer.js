import {ADD_USERS, ADD_USER, DELETE_USER, EDIT_USER} from '../actions/actions'

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    let users;
    switch(action.type) {
        case ADD_USERS:
            users = action.payload;
            return {...state, users}
        case ADD_USER:
            users = state.users.concat(action.payload);
            return {...state, users}
        case DELETE_USER:
            users = state.users.filter(user => user.id !== action.payload);
            return {...state, users}
        case EDIT_USER:
            const { id } = action.payload;
            const userindex = state.users.findIndex(user => user.id === id);
            users = state.users.slice();
            users.splice(userindex, 1, action.payload.res.data);
            return {...state, users};

        default:
            return state;  
    }
}

export default reducer;