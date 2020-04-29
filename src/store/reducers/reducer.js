import {ADD_USERS, ADD_USER, DELETE_USER, EDIT_USER} from '../actions/actions'

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    let users;
    switch(action.type) {
        case ADD_USERS:
            users = action.payload;
            console.log('newusers', users)
            return {...state, users}
        case ADD_USER:
            console.log('ADD USER PAYLOAD', action.payload);
            users = state.users.concat(action.payload);
            return {...state, users}
        case DELETE_USER:
            users = state.users.filter(user => user.id !== action.payload);
            return {...state, users}
        case EDIT_USER:
            console.log('EDIT_USER_PAYLOAD', action.payload);
            const { id } = action.payload;
            console.log('PAYLOAD DATA', action.payload.res.data);
            const userindex = state.users.filter(user => user.id === id);
            users = state.users.slice();
            users.splice(userindex, 1, action.payload.res.data);
            console.log('NEWUSERS', users)
            return {...state, users};

        default:
            return state;  
    }
}

export default reducer;