import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeownersLayout = ({ children }) => {
    return (
        <div>
          
            <main>
            <Outlet />
            </main>
           
        </div>
    );
};

export default HomeownersLayout;