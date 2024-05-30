import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Register from './Register';
import PermanentDrawerLeft from './PermanentDrawerLeft';
import Marketplace from './Marketplace';
import Guide from './Guide';
import Gym from './Gym';
import Yoga from './Yoga';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<PermanentDrawerLeft />}>
                        <Route path="marketplace" element={<Marketplace />} />
                        <Route path="guide" element={<Guide />} />
                        <Route path="gym" element={<Gym />} />
                        <Route path="yoga" element={<Yoga />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
