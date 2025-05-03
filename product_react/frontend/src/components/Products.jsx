import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Products = () => {
  const [products12, setProducts12] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/product/getproduct")
      .then((res) => setProducts12(res.data))
      .catch((err) => console.log(err));
  }, []);

  const delProduct = (id) => {
    axios
      .delete(`http://localhost:2000/product/delete/${id}`)
      .then(() => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"> Product List</h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products12.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <NavLink
                        className="btn btn-sm btn-dark mx-2"
                        to={`edit/${product._id}`}
                      >
                        Edit
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => delProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
