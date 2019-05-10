import React, { Component } from 'react';
import Jimp from 'jimp';
import '../../App.css';


class Input extends Component {

    inputHandler = (e) =>{

    }

	render(){
		return (
		    <div className="App">
		      <header className="App-header">
		        <p>
		          What do youuuuu want your hat to say? 
		        </p>
		      </header>
		      <input type='text' name='hatText' onInput={this.inputHandler}/>
		    </div>
		)
	}
}

export default Input;