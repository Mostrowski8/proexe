import axios from 'axios';

export const ADD_USERS = 'ADD_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const addUsers = (data) => {
    return {
        type: ADD_USERS,
        payload: data
    }
}

export const addUser = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}

export const deleteUser = (data) => {
    return {
        type: DELETE_USER,
        payload: data
    }
}

export const editUser = (data) => {
    return {
        type: EDIT_USER,
        payload: data
    }
}

export const fetchUsers = () => {
    
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch(addUsers(response.data))
        })
        .catch(error => {
            console.log(error);
            dispatch(addUsers(error))
        })
    }
}

export const postUser = (data) => {

    return dispatch => {
        axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(res => {
          let userData = res.data
          dispatch(addUser(userData))
        })
        .catch(err => {
          console.log(err);
        })
    }  
}

export const sendDeletetUser = (data) => {

    return dispatch => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${data}`)
        .then(res => {
          dispatch(deleteUser(data))
        })
        .catch(err => {
          console.log(err);
        })
    }  
}

export const sendEditUser = (userData) => {
    const id = userData.editing;
    return dispatch => {
        axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, userData.data)
        .then(res => {
          dispatch(editUser({res, id}));
        })
        .catch(err => {
          console.log(err);
        })
    }  
}