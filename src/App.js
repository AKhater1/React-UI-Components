import React from 'react';
import Navbar from './Components/Navbar';
import SideMenu from './Components/SideMenu';
import {Switch, Route} from "react-router-dom";
import School from './Components/School';
import Teacher from './Components/Teacher';
import Student from './Components/Student';
import Groups from './Components/Groups';
import Profile from './Components/Profile';
import Lectures from './Components/Lectures';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <SideMenu />
    </div>

    <Switch>
      <Route exact path="/school" component={School} />
      <Route exact path="/teacher" component={Teacher} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/lectures" component={Lectures} />
    </Switch>
    </>
  );
}

export default App;
