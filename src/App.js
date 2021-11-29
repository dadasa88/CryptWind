import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CWNavbar from './components/CWNavbar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      document.title = "CryptWind"
    }, []);

  return (
    <Router>
      <div className="App">
        <CWNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
