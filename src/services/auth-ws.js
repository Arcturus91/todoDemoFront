//import api // default donde tengo mi url base

import {api} from './api';
import {successStatus,internalServerError} from '../utils/format-response'

//Login
                            //<https://demo-auth-react.herokuapp.com/api>
export const loginWs =(data) => api.post("/auth/login",data)
.then(successStatus)
.catch(internalServerError)
//Signup
export const signupWs =(data) => api.post("/auth/signup",data)
.then(successStatus)
.catch(internalServerError)
//Logout
export const logoutWs =() => api.get("/auth/logout")
.then(successStatus)
.catch(internalServerError)