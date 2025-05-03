import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:2000/user/login', form)
            .then(res => {
                alert(res.data.message);
                navigate('/admin');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container col-md-4 my-5">
            <h3>Login</h3>
            <input type="text" className="form-control mb-2" placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input type="password" className="form-control mb-2" placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="btn btn-dark" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
