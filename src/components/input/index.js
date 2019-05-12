import React, { Component } from 'react';
import Jimp from 'jimp';
import '../../App.css';
import Result from '../result';


class Input extends Component {
    state = {
    	textEntered: false,
    	text: ''
    }

    clickHandler = () =>{
    	console.log('hitting this.');
    	this.setState({ textEntered: true });
    };

    inputHandler = (e) =>{
        this.setState({ text: e.target.value })
    }

	render(){
		return (
		    <div className="App">
		    {this.state.textEntered ? <Result text={ this.state.text } />:
		    <div>
		      <header className="App-header">
		        <p>
              {this.state.apiResponse}
		          What do you want your hat to say?
		        </p>
		      </header>
		      <input type='text' name='hatText' onInput={this.inputHandler} />
		      <button onClick={this.clickHandler}>Submit</button>
		    </div>
		    }
		    </div>
		)
	}
}

export default Input;