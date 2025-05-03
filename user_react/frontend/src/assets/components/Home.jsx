import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="mb-4">Welcome to the User Dashboard</h1>
            <p className="lead">Manage users easily with the tools below.</p>

            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <NavLink to="/admin/user" className="btn btn-dark">View Users</NavLink>
                <NavLink to="/admin/user/add" className="btn btn-outline-dark">Add New User</NavLink>

            </div>
        </div>
    );
};

export default Home;
