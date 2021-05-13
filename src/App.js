import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
