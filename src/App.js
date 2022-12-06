import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/react-blog">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* This must be put at the bottom to catch all possible
            routes after the main ones have been checked */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// npx json-server --watch data/db.json --port 8000
