import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import MenuPage from '../../Pages/MenuPage/MenuPage';
import Home from '../../Pages/Home/Home';
import NotFound from '../NotFound/NotFound';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </ Route>
                <Route path='/AboutUs'>
                    <AboutUs />
                </Route>
                <Route path='/Menu'>
                    <MenuPage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>

        </div>
    );
};
