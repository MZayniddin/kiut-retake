import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Schedule from "./pages/Schedule";
import Retake from "./pages/Retake";
import Fails from "./pages/Fails";
import Main from "./components/layout/Main";

// STYLES
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  const [isDean, setIsDean] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  console.log(isDean);

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />

        {isAuthenticated ? (
          <Main isDean={isDean}>
            {isDean ? (
              <>
                <Route exact path="/dashboard" component={Home} />
              </>
            ) : (
              <Redirect to="/profile" />
            )}
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/retake" component={Retake} />
            <Route exact path="/fails" component={Fails} />
          </Main>
        ) : (
          <Redirect to="/sign-in" />
        )}
        <Redirect from="*" to="/sign-in" />
      </Switch>
    </div>
  );
}

export default App;
