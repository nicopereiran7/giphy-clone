import React, { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
