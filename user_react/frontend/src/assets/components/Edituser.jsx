import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:2000/user/fetchone/${id}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const updateUser = () => {
        axios.put(`http://localhost:2000/user/update/${id}`, { ...user })
            .then(() => navigate('/admin/user'))  // Navigate to user list after update
            .catch((err) => console.log(err));
    };


    return (
        <div className="container col-md-4 my-5">
            <h3>Edit User</h3>
            <input type="text" className="form-control mb-2" placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <input type="password" className="form-control mb-2" placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className="btn btn-dark" onClick={updateUser}>Update User</button>
        </div>
    );
};

export default EditUser;
