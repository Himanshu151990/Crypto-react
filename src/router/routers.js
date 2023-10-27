import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../component/Header/header';
import Home from '../component/Home/home'
import Menu from '../component/Menu/menu';
import Market from '../component/Market/market'
import About from '../component/About/about'


const BasicExample = () => {
    return (
        <Router>
            <>
                {/* <Header /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/market" component={Market} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </>
        </Router>
    );
}

export default BasicExample;