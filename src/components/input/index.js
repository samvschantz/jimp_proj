import React, { Component } from 'react';
import Jimp from 'jimp';
import '../../App.css';


class Input extends Component {
    state = {
    	textEntered: false,
    	text: ''
    }

    inputHandler = (e) =>{
    	console.log(e)
    	console.log(e.value);
    };

    clickHandler = () =>{
    	console.log('hitting this.');
    	this.setState({ textEntered: true });
    };

	render(){
		return (
		    <div className="App">
		    {this.state.textEntered ? <Result text={ this.state.text } />:
		    <div>
		      <header className="App-header">
		        <p>
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