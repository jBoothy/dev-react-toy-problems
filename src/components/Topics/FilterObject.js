import React, {Component} from 'react'

export default class FilterObject extends Component{
constructor(){
    super();

    this.state = {
        unFilteredArray: [
            {
                name: 'John',
                title: 'Web Developer',
                age: 29
            },
            {
                name: 'Cassidy',
                hairColor: 'brown',
                age: 26
            },
            {
                name: 'Bailey',
                title: 'Bug Tester'
            }
        ],
        userInput: '',
        filteredArray: []
    }
}

handleChange (input){
    this.setState({ userInput: input });
}

filterUsers(prop) {
    var users = this.state.unFilteredArray;
    var filteredArray = [];
    
    for ( var i = 0; i < users.length; i++ ) {
      if ( users[i].hasOwnProperty(prop) ) {
        filteredArray.push(users[i]);
      }
    }

    this.setState({ filteredArray: filteredArray });
  }

render(){
    return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
}
}