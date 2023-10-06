import { createStore } from "redux";
import {reducer, loginReducer, getUserReducer, loggedReducer, logoutReducer } from "./user/userReducer";
import { adminLoggedReducer, adminLogoutReducer, adminReducer } from "./admin/adminReducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
const rootReducer=combineReducers({
    login:loginReducer,
    register:reducer,
    userData:getUserReducer,
    admin:adminReducer,
    logged:loggedReducer,
    adminLog:adminLoggedReducer,
    logout:logoutReducer,
    admin_logout:adminLogoutReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk,logger))
