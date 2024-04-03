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
import HomeOwnerDashboard from "./components/HomeOwners/HomeOwnerDashboard";

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
    {
        path: '/homeOwner/dashboard',
        element: <HomeOwnerDashboard/>
    },
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
