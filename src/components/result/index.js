import React, { useState, useEffect } from 'react';
import Jimp from 'jimp';
import '../../App.css';


function Result(props){
  const [imgPath, setData] = useState("");
	useEffect(() => {
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
          .then(res => res.text())
          .then(res => setData("http://localhost:3002/" + res.substring(7)));
  }

	return(
		<div>
			<p>This your hat:</p>
			<img src={imgPath} />
		</div>
	)
}

export default Result;