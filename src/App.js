import React from "react";
import "./App.css";
import Chat from "./containers/Chat";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import ErrorPage from "./components/utils/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/*" component={ErrorPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
