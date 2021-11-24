import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CWNavbar from './CWNavbar';
import Home from './Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

function App() {
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
