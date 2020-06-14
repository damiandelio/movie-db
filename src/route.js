import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// Components
import HomePage from "./pages/HomePage/HomePage";


const router = (
    <Router>
        <Route path="/" component={HomePage}/>
    </Router>
);

export default router;
