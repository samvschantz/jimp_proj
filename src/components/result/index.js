import React, { useState, useEffect } from 'react';
import Jimp from 'jimp';
import '../../App.css';


function Result(props){
	useEffect(() => {
		console.log(props.text);
	})

	return(
		<div>
			<p>This your hat:</p>
		</div>
	)
}

export default Result;