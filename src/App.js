import React, { Suspense, lazy } from "react";

import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import { Switch, Route, Redirect } from "react-router";
const Form = lazy(() => import("./Components/Form/Form"));
const Events = lazy(() => import("./Components/Events/Events"));
const Event = lazy(() => import("./Components/Event/Event"));
const Layout = lazy(() => import("./Components/Layout/Layout"));
const Login = lazy(() => import("./Components/Login/Login"));
const Quiz = lazy(() => import("./Components/Quiz/Quiz"));

const App = (props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Form />
          </Layout>
        </Route>
        <Route path="/events" exact>
          <Layout>
            <Events />
          </Layout>
        </Route>
        <Route path="/events/debate">
          <Layout>
            <Event />
          </Layout>
        </Route>
        <Route path="/login">
          <Layout>
            <Login />
          </Layout>
        </Route>
        <Route path="/quiz">
          <Layout>
            <Quiz />
          </Layout>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default App;
