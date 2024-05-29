import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Register from './Register';
import PermanentDrawerLeft from './PermanentDrawerLeft';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<PermanentDrawerLeft />} /> {/* Changed to handle nested routes */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
