import React, { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Gif from "./pages/Gif";
import Channel from "./pages/Channel";
import User from "./pages/User";
import Search from "./pages/Search";
import Sport from "./pages/Sport";
import Entertainment from "./pages/Entertainment";
import Category from "./pages/Category";

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
        <Route exact path="/gif/:id" component={Gif} />
        <Route exact path="/channel/:id" component={Channel} />
        <Route exact path="/user/:username" component={User} />
        <Route exact path="/search/:term" component={Search} />
        <Route exact path="/sport" component={Sport} />
        <Route exact path="/entertaiment" component={Entertainment} />
        <Route exact path="/categories/:name" component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
