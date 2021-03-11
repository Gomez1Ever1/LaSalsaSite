import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Home from '../Pages/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import LaSalsa from '../Pages/LaSalsa/LaSalsa';

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
                <Route path='/LaSalsa'>
                    <LaSalsa />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>

        </div>
    );
};
