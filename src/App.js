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
      <Route path="/teacher" component={Teacher} />
      <Route path="/student" component={Student} />
      <Route path="/groups" component={Groups} />
      <Route path="/profile" component={Profile} />
      <Route path="/lectures" component={Lectures} />
    </Switch>
    </>
  );
}

export default App;
