import {AuthPage,ProfilePage} from '../pages'; //nota como importamos todo desde index.

const routes = (props) =>{
    return [
{
path:"/", //homepage
element:<h1>Home</h1>
},
{
    path:"/login",
    element:<AuthPage {...props}/>
}
,
{
    path:"/signup",
    element:<AuthPage  {...props}/>
},
{
    path:"/profile",
    element:<ProfilePage  {...props}/>
}
    ]
}

export default routes