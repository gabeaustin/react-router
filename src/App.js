import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                {/* Used to be <About /> */}
                <Route path="/about" component={About} /> 
                {/* Used to be <Shop /> */}
                <Route path="/shop" exact component={Shop} />
                {/* The component will be rendered out b/c we used :id */}
                <Route path="/shop/:id" component={ItemDetail} />
            </Switch>
        </div>
    </Router>
  );
};

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
