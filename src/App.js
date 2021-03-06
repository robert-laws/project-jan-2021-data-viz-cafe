import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import { Modal } from './components';

const Home = lazy(() => import('./pages/Home'));
const Cafe = lazy(() => import('./pages/Cafe'));
const Locations = lazy(() => import('./pages/Locations'));
const Menu = lazy(() => import('./pages/Menu'));
const Order = lazy(() => import('./pages/Order'));
const Visualizations = lazy(() => import('./pages/Visualizations'));
const Data = lazy(() => import('./pages/Data'));
const Weeks = lazy(() => import('./pages/Weeks'));
const Week1 = lazy(() => import('./pages/Week1'));
const Week2 = lazy(() => import('./pages/Week2'));
const Week3 = lazy(() => import('./pages/Week3'));
const Week4 = lazy(() => import('./pages/Week4'));
const Week5 = lazy(() => import('./pages/Week5'));
const Concepts = lazy(() => import('./pages/Concepts'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div
        className='is-flex is-flex-direction-column'
        style={{ height: '100vh', width: '100%' }}
      >
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div class='preLoadSpinner'></div>
              <div class='preLoadSpinnerText'>Loading...</div>
            </div>
          }
        >
          <Header />
          <Main>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/cafe'>
                <Cafe />
              </Route>
              <Route path='/locations'>
                <Locations />
              </Route>
              <Route path='/order'>
                <Order />
              </Route>
              <Route path='/menu'>
                <Menu />
              </Route>
              <Route path='/order'>
                <Home />
              </Route>
              <Route path='/data'>
                <Data />
              </Route>
              <Route path='/concepts'>
                <Concepts />
              </Route>
              <Route path='/resources'>
                <Resources />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/weeks'>
                <Weeks />
              </Route>
              <Route path='/week1'>
                <Week1 />
              </Route>
              <Route path='/week2'>
                <Week2 />
              </Route>
              <Route path='/week3'>
                <Week3 />
              </Route>
              <Route path='/week4'>
                <Week4 />
              </Route>
              <Route path='/week5'>
                <Week5 />
              </Route>
              <Route path='/visualizations'>
                <Visualizations />
              </Route>
              <Route path='/*'>
                <NotFound />
              </Route>
            </Switch>
          </Main>
          <Footer />
          <Modal />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
