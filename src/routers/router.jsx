import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Terms from "../components/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-hat-server.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://chef-hat-server.vercel.app/blog')
            },
            {
                path: '*',
                element: <ErrorPage />

            }
        ]

    }
])

export default router;