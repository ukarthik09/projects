import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSignup = () => {
        axios.post('http://localhost:2000/user/signup', form)
            .then(res => {
                alert(res.data.message);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container col-md-4 my-5">
            <h3>Signup</h3>
            <input type="text" className="form-control mb-2" placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input type="password" className="form-control mb-2" placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="btn btn-dark" onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
