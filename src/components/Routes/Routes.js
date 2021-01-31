import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import MenuPage from '../../Pages/MenuPage/MenuPage';
import Home from '../../Pages/Home/Home';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </ Route>
            </Switch>
        </div>
    );
};
