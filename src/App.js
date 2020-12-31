import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserMenu from './components/UserMenu/UserMenu';
import AboutUs from './Pages/AboutUs/AboutUs';
import MenuPage from './Pages/MenuPage/MenuPage';

function App() {
  return (
    <div className="App">
      <div><h1>La Salsa Market</h1>
        <h2>Una Verdadera Fiesta de Sabor!</h2></div>

      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={UserMenu} />
              <Route path='/AboutUs' component={AboutUs} />
              <Route path='/MenuPage' component={MenuPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
