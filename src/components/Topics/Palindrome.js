import React, {Component} from 'react'

export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(input){
        this.setState({ userInput: input });
    }

    isPalindrome(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse('');
        backwards = backwards.join('');

        if(forwards===backwards){
            this.setState({ palindrome: 'true' });
        } else{
            this.setState({ palindrome: 'false' })
        }
    }

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.isPalindrome(this.state.userInput)}>Confirm</button>
                <span className='resultsBox'>Is palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}