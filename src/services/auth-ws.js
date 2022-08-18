//import api // default donde tengo mi url base

import {api} from './api';

//Login
                            //<https://demo-auth-react.herokuapp.com/api>
export const loginWs =(data) => api.post("/auth/login",data); 
//Signup
export const signupWs =(data) => api.post("/auth/signup",data);
//Logout
export const logoutWs =() => api.get("/auth/logout");