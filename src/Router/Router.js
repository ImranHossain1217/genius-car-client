import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import Home from "../components/Home";
import Login from "../components/Login";
import Order from "../components/Order";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/service',
                element:<Services></Services>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact'
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/order',
                element: <Order></Order>
            }
        ]
    }
]);

export default router;