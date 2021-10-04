import logo from './logo.svg';
import './App.css';
import Services from './Comonents/Services/Services';
import Footer from './Comonents/Footer/Footer';
import Service from './Comonents/Service/Service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Comonents/Header/Header';
import Home from './Comonents/Home/Home';
import NotFound from './Comonents/NotFound/NotFound';
import About from './Comonents/About/About';
import Contact from './Comonents/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

      </Router>



      <Footer></Footer>
    </div>
  );
}

export default App;
