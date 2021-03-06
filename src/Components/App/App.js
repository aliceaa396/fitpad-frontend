import React, { Component } from "react";
import RegisterPage from "../../Routes/RegisterPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import NoPageFound from "../../Routes/NoPageFound";
import Context from "../../Contexts/Context";
import AddWorkoutPage from "../../Routes/AddWorkoutPage";
import UserHomepage from "../User/UserHomepage";
import Login from "../LoginRegister/Login";


import NavMenu from "../NavMenu/NavMenu";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: null
    };
  }
  emptyAuth = () => {
    this.setState({ authToken: null });
  };
  setAuth = token => {
    this.setState({ authToken: token });
  };

  render() {
    const value = {
      authToken: this.state.authToken,
      emptyAuth: this.emptyAuth,
      setAuth: this.setAuth
    };
    return (
      <BrowserRouter>
        <Context.Provider value={value}>
          <div className="App">
            <NavMenu />

            <main className="App_main">
              {this.state.hasError && (
                <p className="red"> There was an Error!</p>
              )}

              <Switch>
                <Route exact path={"/"} component={LandingPage} />
                <PublicOnlyRoute path={"/Login"} component={Login} />
                <PublicOnlyRoute path={"/Register"} component={RegisterPage} />

                <PrivateRoute exact path={"/Add"} component={AddWorkoutPage} />

                <PrivateRoute exact path={"/Home"} component={UserHomepage} />

                <Route component={NoPageFound} />
              </Switch>
            </main>
          </div>
        </Context.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
