import React from "react";
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import PlanA from "./PlanA";
import PlanB from "./PlanB";

function Main() {
  return (
        <Router>
            <Route exact path="/" component={PlanA} />
            <Route exact path="/planb/" component={PlanB} />
        </Router>

  );
}

export default Main;
