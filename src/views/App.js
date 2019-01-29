import React from 'react'
import styled from 'styled-components'
import UserDashboard from './containers/UserDashboard';
import Home from './containers/Home';
import AdminDashboard from './containers/AdminDashboard';
import ChatRoom from './containers/ChatRoom'
import UserComment from './containers/UserComment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import { store } from '../Store'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';

// init fontAwesome
library.add(fas, far)

const AppContainer = styled.section.attrs({})`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 80px;
  background: #fff;
  box-shadow: 0 20px 50px 0 rgba(34,43,55,.1);
  padding: 20px 40px;
  border-radius: 5px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
`;

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/dashboard/:username" component={AdminDashboard} />
          <Route path="/user/chatroom" component={ChatRoom} />
          <Route path="/user/comments" component={UserComment} />
          <Route path="/user/:username" component={UserDashboard} />
          <Route path="/register" component={Home} />
          <Route path="/forget-password" component={Home} />
          <Route path="/login" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </HashRouter>
    </Provider>
  </AppContainer>
)

export default App