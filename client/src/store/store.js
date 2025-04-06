import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice'



const store = configureStore({
    reducer:{
        auth:authReducer,
    },
})

export default store;

//The `authReducer` manages the `auth` part of the state. This reducer, defined in `auth-slice.js`, contains `user` and isAuthenticated in its initialState.

//Code Flow:
// Async thunk dispatches an action.
// Reducer updates the state based on the action type (e.g., pending, fulfilled).
// The updated state is reflected in components through useSelector.