// src/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerWithEmailPassword } from './AuthService';
import './Auth.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await registerWithEmailPassword(email, password);
            navigate('/login');
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={handleRegister}>Register</button>
                <Link to="/login" className="auth-link">Login</Link>
            </div>
        </div>
    );
}

export default Register;
