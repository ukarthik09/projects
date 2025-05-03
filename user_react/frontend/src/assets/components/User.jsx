import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:2000/user/show")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log('Error fetching users:', err));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:2000/user/delete/${id}`)
            .then(() => navigate("/admin/user"))
            .catch((err) => console.log('Error deleting user:', err));
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">User List</h2>
            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>
                                    <NavLink className="btn btn-sm btn-dark mx-2" to={`/admin/user/edit/${user._id}`}>Edit</NavLink>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
