/**
 *
 * @param
 */
import React, { useState, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import Results from './home/results/results';
import Poll from './home/poll/poll';
import Main from './shared/components/main-page/main';
import VoteOpener from './home/poll/voteOpener';
import VotesList from './home/poll/votesList';
import VoterList from './home/poll/voterList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const routes = (
    <Switch>
      <Route path="/" exact>
        { isLoggedIn ? <Users /> : <Main /> }
      </Route>
      <Route path="/open-vote" exact>
      <VoteOpener />
      </Route>
      <Route path="/votes" exact>
        <VotesList />
      </Route>
      <Route path="/voters" exact>
        <VoterList />
      </Route>

      {
        !isLoggedIn &&
        <Route path="/auth">
          <Auth />
        </Route>
      }
      {
        isLoggedIn &&
        <Route path="/places/new" exact>
        </Route>
      }
      {
        isLoggedIn &&
      <Route path="/results">
        <Results />
      </Route>
       }
      {
        isLoggedIn &&
      <Route path="/poll">
        <Poll />
      </Route>
      }
      {
        isLoggedIn &&
      <Route path="/open-vote">
        <VoteOpener />
      </Route>
      }
      { isLoggedIn ? <Redirect to="/" /> : <Redirect to="/auth" /> }
    </Switch>
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
