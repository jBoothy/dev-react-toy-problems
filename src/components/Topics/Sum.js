import React, {Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super();

        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    update1(input){
        this.setState({ number1: parseInt(input, 10) })
    }

    update2(input){
        this.setState({ number2: parseInt(input, 10) })
    }

    sum(num1, num2){
        // alert("Click brokeded")
        // console.log(num1, num2)
        this.setState({ sum: num1+num2 })

    }

    render(){
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type="number" onChange={(e)=>this.update1(e.target.value)}></input>
                <input className='inputLine' type="number" onChange={(e)=>this.update2(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.sum(this.state.number1, this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}