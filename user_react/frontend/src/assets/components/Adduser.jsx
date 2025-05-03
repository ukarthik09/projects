import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const saveUser = async () => {
        try {
            const response = await axios.post('http://localhost:2000/user/add', user);
            console.log('User added:', response.data);
            navigate('/admin/user');
        } catch (error) {
            console.error('Error adding user:', error.response?.data || error.message);
            alert("Failed to add user. Check console for details.");
        }
    };

    return (
        <div className="container col-md-4 my-5">
            <h3>Add New User</h3>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button className="btn btn-dark" onClick={saveUser}>Save User</button>
        </div>
    );
};

export default AddUser;
