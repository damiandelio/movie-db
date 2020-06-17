import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Components
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePage from "./pages/MoviePage/MoviePage";

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:movieid" component={MoviePage}></Route>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default router;
