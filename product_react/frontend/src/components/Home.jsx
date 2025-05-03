import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Welcome to the Product Dashboard</h1>
      <p className="lead">Manage your products easily with the tools below.</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <NavLink to="/admin/products" className="btn btn-dark">
          View Products
        </NavLink>
        <NavLink to="/admin/products/add" className="btn btn-outline-dark">
          Add New Product
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
