import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
