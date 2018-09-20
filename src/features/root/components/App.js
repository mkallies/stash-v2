import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from '../../auth/containers/Login'
// import PrivateRoute from '../containers/PrivateRoute'
import Home from '../../../features/home/containers/HomeContainer'
import MyStash from '../../../features/my-stash'
import Search from '../../../features/search/containers/SearchContainer'
import NavbarContainer from '../../../features/navigation/containers/NavbarContainer'
import Admin from '../../../features/admin/containers/AdminContainer'

import FourOhFour from './404'

const App = () => (
  <div className="app">
    <NavbarContainer />

    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={MyStash} exact path="/my-stash" />
      <Route component={Search} exact path="/search" />
      <Route component={Admin} path="/admin" />
      <Route component={FourOhFour} />
    </Switch>
    <ToastContainer />
  </div>
)

export default App
