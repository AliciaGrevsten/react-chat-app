import React from "react";
import "./App.css";
import Chat from "./containers/Chat";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ErrorPage from "./containers/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={Chat} />
          <Route path="/*" component={ErrorPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
