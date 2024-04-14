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




// import { createBrowserRouter, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import Home from "./components/Home";
// import DetailPage from "./components/Detail";
// import Register from "./components/Authentication/Register";
// import Login from "./components/Authentication/Login";
// import PageNotFound from "./components/PageNotFound";
// import Layout from "./layouts/Layout";
// import GuestLayout from "./layouts/GuestLayout";
// import AdminLayout from "./layouts/AdminLayout";
// import HomeownersLayout from "./layouts/HomeownersLayout";
// import AnnonceCreataForm from "./components/Annonce/AnnonceCreataForm";
// import AnnonceUpdateForm from "./components/Annonce/AnnonceUpdateForm";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import HomeOwnerDashboard from "./components/HomeOwners/HomeOwnerDashboard";
// import StripeView from "./components/Reservation/Reserver";
// import AuthContext from "./contexts/AuthenticationContext/AuthContexts";
// import AuthProvider from "./contexts/AuthenticationContext/AuthProvider"; // Import AuthProvider here

// const AdminGuard = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   if (currentUser && currentUser.role_id === 10) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// const HomeOwnerGuard = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   if (currentUser && currentUser.role_id === 3) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// const ClientGuard = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   if (currentUser && currentUser.role_id === 1) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/detail/:id",
//         element: <DetailPage />,
//       },
//       {
//         path: "*",
//         element: <PageNotFound />,
//       },
//       {
//         path: "/annonce/create",
//         element: <AuthProvider> {/* Wrap the route with AuthProvider */}
//           <HomeOwnerGuard>
//             <AnnonceCreataForm />
//           </HomeOwnerGuard>
//         </AuthProvider>,
//       },
//       {
//         path: "/annonce/update/:id",
//         element: <AuthProvider> {/* Wrap the route with AuthProvider */}
//           <HomeOwnerGuard>
//             <AnnonceUpdateForm />
//           </HomeOwnerGuard>
//         </AuthProvider>,
//       },
//     ],
//   },
//   {
//     path: "/admin/dashboard",
//     element: (
//       <AdminGuard>
//         <AdminDashboard />
//       </AdminGuard>
//     ),
//   },
//   {
//     path: "/homeOwner/dashboard",
//     element: (
//       <HomeOwnerGuard>
//         <HomeOwnerDashboard />
//       </HomeOwnerGuard>
//     ),
//   },
//   {
//     path: "/reserver/:id",
//     element: (
//       <ClientGuard>
//         <StripeView />
//       </ClientGuard>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <AuthProvider>
//         <Register />
//       </AuthProvider>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <AuthProvider>
//         <Login />
//       </AuthProvider>
//     ),
//   },
// ]);
