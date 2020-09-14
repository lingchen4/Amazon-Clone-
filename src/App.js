import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./config";
import { useStateValue } from "./StateProvider";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    function authentication() {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // the user just logged in / the user was logged in
          dispatch({
            type: "SET_USER",
            user: authUser.displayName,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }
    authentication();
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout title="Checkout" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home title="Home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
