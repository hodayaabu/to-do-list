import React from "react";
import ReactDOM from "react-dom/client";

//component file
import Navigationbar from "./functionBased/components/Navigationbar";
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/components/About";
import Contact from "./functionBased/components/Contact";
import NoMatch from "./functionBased/components/NoMatch";

//stylesheet
import "./functionBased/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={TodoContainer} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  </React.StrictMode>
);
