import React, {Component} from 'react';

import Search from './components/search';
import Scroll from './components/scroll';
import List from './components/list';
import ErrorBoundary from './components/errorBoundary';
import Footer from './components/footer';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchField: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(user => {
        this.setState({robots: user})
    });
  }

  onSearchChange(event){
    this.setState({searchField: event.target.value})
  }

  render(){
  
  let filteredRobots = this.state.robots.filter(robot => {
     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  });
 
  if(this.state.robots.length===0){
      return <h1>LOADING</h1>
  }

  else{
      return(
          <div>
          <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Sriracha&display=swap" rel="stylesheet" />
           
          <h1> ROBOFRIENDS</h1>

          <Search change = {this.onSearchChange}/>
          <h2>An app which will give you the opportunity to make friends with ROBOTS </h2>
          
          <Scroll>
          <ErrorBoundary>
          <List robots = {filteredRobots} />
          </ErrorBoundary>
          </Scroll>
          <Footer/>
          
          </div>
      );
  }
}
}

export default App;
