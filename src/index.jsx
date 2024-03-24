import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import DetailPage from "../components/Detail";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import AuthProvider from "../contexts/AuthenticationContext/AuthProvider";
import PageNotFound from "../components/PageNotFound";
import Layout from "./../layouts/Layout";
import GuestLayout from "../layouts/GuestLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomeownersLayout from "../layouts/HomeownersLayout";

export const router = createBrowserRouter([
    {
        element : <Layout />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/detail',
                element: <DetailPage />
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    },
    // {
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: '/register',
    //             element: (
    //                 <AuthProvider>
    //                     <Register />
    //                 </AuthProvider>
    //             )
    //         },
    //         {
    //             path: '/login',
    //             element: (
    //                 <AuthProvider>
    //                     <Login />
    //                 </AuthProvider>
    //             )
    //         }
    //     ]
    // },
    // {
    //     element: <AdminLayout />,
    //     children: [
    //         {
    //             path: '/Admin/dashboard',
    //             element: (
    //                 <AuthProvider>
    //                     <Register />
    //                 </AuthProvider>
    //             )
    //         }
    //     ]
    // },
 
   
    // {
    //     element: <HomeownersLayout />,
    //     children: [
    //         {
    //             path: '/homeowners/dashboard',
    //             element: (
    //                 <AuthProvider>
    //                     <Register />
    //                 </AuthProvider>
    //             )
    //         }
    //     ]
    // },
    {
                    path: '/register',
                    element: (
                        <AuthProvider>
                            <Register />
                        </AuthProvider>
                    )
                },
                {
                    path: '/login',
                    element: (
                        <AuthProvider>
                            <Login />
                        </AuthProvider>
                    )
                }
  
]);