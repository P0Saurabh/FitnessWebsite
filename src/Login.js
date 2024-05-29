// src/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginWithEmailPassword, loginWithGoogle } from './AuthService';
import './Auth.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginWithEmailPassword(email, password);
            navigate('/');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            alert('Login with Google failed: ' + error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={handleLogin}>Log In</button>
                <button onClick={handleGoogleLogin}>Log In with Google</button>
                <Link to="/register" className="auth-link">Register</Link>
            </div>
        </div>
    );
}

export default Login;
