import React, { useState, useEffect } from 'react';
import Jimp from 'jimp';
import '../../App.css';


function Result(props){

	useEffect(() => {
		console.log(props.text);
		callAPI(props.text);
	})

  function callAPI(hatText){
  	let hatTextObj =  JSON.stringify({text: hatText});
      fetch("http://localhost:3002/hatRoute", {
					  	method: "POST",
						  headers: {
						    'Content-type': 'application/json'
						  },
						  body: hatTextObj
					  })
					  .then((result) => {
					    console.log(result)
					  })

          // .then(res => res.text())
          // .then(res => this.setState({ apiResponse: res }));
  }

	return(
		<div>
			<p>This your hat:</p>
		</div>
	)
}

export default Result;