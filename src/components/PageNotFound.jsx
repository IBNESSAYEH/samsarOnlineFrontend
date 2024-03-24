import React from 'react';

const PageNotFound = () => {
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-md-6 text-center">
                    <h1 className="display-4">Page Not Found</h1>
                    <p className="lead">Oops! The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;