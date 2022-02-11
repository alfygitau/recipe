import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to='/'/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
