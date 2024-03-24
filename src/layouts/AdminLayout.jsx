import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    return (
        <div>
            
            <main>
            <Outlet />
            </main>
           
        </div>
    );
};

export default AdminLayout;