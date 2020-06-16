import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = (
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route component={NotFoundPage} />
  </Router>
);

export default router;
