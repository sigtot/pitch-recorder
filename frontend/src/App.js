import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/guess">Guess</Link>
                    </li>
                    <li>
                        <Link to="/check">Check</Link>
                    </li>
                </ul>

                <hr/>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <div>Home</div>
                    </Route>
                    <Route path="/guess">
                        <div>Guess</div>
                    </Route>
                    <Route path="/check">
                        <div>Check</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
