import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context provider vvv
import injectContext from './store/appContext';

// components vvv
import Navbar from './components/navbar';
import Footer from './components/footer';

// sections vvv
import Home from './views/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App); 
