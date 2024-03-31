import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import DetailPage from "./components/Detail";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import AuthProvider from "./contexts/AuthenticationContext/AuthProvider";
import PageNotFound from "./components/PageNotFound";
import Layout from "./layouts/Layout";
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomeownersLayout from "./layouts/HomeownersLayout";
import AnnonceCreataForm from "./components/Annonce/AnnonceCreataForm";
import AnnonceUpdateForm from "./components/Annonce/AnnonceUpdateForm";
import AdminDashboard from "./components/Admin/AdminDashboard";

export const router = createBrowserRouter([
    {
        
        element : <Layout />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/detail/:id',
                element: <DetailPage />
            },
            {
                path: '*',
                element: <PageNotFound />
            },
            {
                path: '/annonce/create',
                element: <AnnonceCreataForm />
            },
            {
                path: '/annonce/update/:id',
                element: <AnnonceUpdateForm />
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <AdminDashboard />
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
