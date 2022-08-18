import axios from 'axios';

//crear un const para validar si mi aplicación está en producción o está en local.

const isProduction = process.env.NODE_ENV === 'production';

// SI LA APP YA ESTÁ en producción, hará petición a heroku
                                    //prod                                   //develop
const baseURL = isProduction ? 'https://demo-auth-react.herokuapp.com/api': "http://localhost:5005/api"

export const api = axios.create({
    baseURL,
    withCredentials: true,
    timeout:10000,
})
