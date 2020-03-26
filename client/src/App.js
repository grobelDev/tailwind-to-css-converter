import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useParams,
  // useLocation,
  // Redirect,
  // useRouteMatch
} from 'react-router-dom';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <div className='text-4xl font-bold text-center text-blue-500'>
            Welcome to the HomePage
          </div>
        </Route>
        <Route path='/'>
          <div>404 Error!</div>
        </Route>
      </Switch>
    </Fragment>
  );
}
