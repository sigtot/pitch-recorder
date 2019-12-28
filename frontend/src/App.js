import React from 'react';
import './App.css';
import Home from './components/Home';
import Guess from './components/Guess';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color:#e0e5ec;
`;

function App() {
    return (
        <Wrapper>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/guess">
                            <Guess/>
                        </Route>
                        <Route path="/check">
                            <div>Check</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Wrapper>
    );
}

export default App;
