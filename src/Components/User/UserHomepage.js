import React, { Component } from 'react'
import AddWorkoutPage from '../../Routes/AddWorkoutPage'
import { Link } from 'react-router-dom';
import DisplayWorkouts from '../UserWorkouts/DisplayWorkouts';
import '../../Styles/UserHome.css';

export class UserHomepage extends Component {
  render() {
    return (
      <div className="displayWorkouts">
        <h1> My Fitpad </h1>
        <Link to="/Add" className="link"> Add a workout </Link>
        
        <div className="myLoggedWorkouts">
          <DisplayWorkouts />
        </div>
        
      </div>
    )
  }
}

export default UserHomepage




// state={
  //   UserWorkouts: [],
  //   error: null
  // }
  // setUserWorkouts = workouts => {
  //   this.setState({
  //     workouts,
  //     error:null,
  //   })
  // }