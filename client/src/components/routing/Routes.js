import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddFunding from '../profile-forms/AddFunding';
import Profiles from '../profiles/Profiles';
import Startups from '../profiles/Startups';
import Investors from '../profiles/Investors';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

export const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/startups' component={Startups} />
        <Route exact path='/investors' component={Investors} />
        <Route exact path='/profile/:id' component={Profile} />

        <PrivateRoute
          exact
          path='/dashboard'
          component={Dashboard}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/create-profile'
          component={CreateProfile}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/edit-profile'
          component={EditProfile}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/add-funding'
          component={AddFunding}
        ></PrivateRoute>

        <PrivateRoute exact path='/posts' component={Posts}></PrivateRoute>
        <PrivateRoute exact path='/posts/:id' component={Post}></PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
