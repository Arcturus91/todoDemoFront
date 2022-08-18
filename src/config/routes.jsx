import AuthPage from '../pages/AuthPage';

const routes = (props) =>{
    return [
{
path:"/", //homepage
element:<h1>Home</h1>
},
{
    path:"/login",
    element:<AuthPage/>
}
,
{
    path:"/signup",
    element:<AuthPage/>
}
    ]
}

export default routes