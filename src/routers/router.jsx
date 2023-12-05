import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ChefDetails from "../components/ChefDetails/ChefDetails";

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
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]

    }
])

export default router;