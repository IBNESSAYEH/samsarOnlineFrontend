import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = ({ children }) => {
    return (
        <div>
           

            {/* Add your main content component here */}
            <main>
            <Outlet />
            </main>

           
        </div>
    );
};

export default GuestLayout;