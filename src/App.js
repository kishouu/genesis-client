import './App.css'
import Header from './Header.js'
import Cart from './pages/Cart.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import About from './pages/About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemPage from './pages/ItemPage'
import Community from './pages/Community'



function App() {

  return (
    <div>

      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/community">
            <Community />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path={`/prod/:name`} component={ItemPage} />

        </Switch>

      </Router>
      

    </div>
  );
}

export default App;
