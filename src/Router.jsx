import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
import CategoryPage from "./pages/category/CategoryPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },

            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path:'catergory',
                element: <CategoryPage />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'products/:id',
                element: <ProductsDetails/>,
            }
        ]
    }

])

export default router;