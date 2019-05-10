import React, { useState, useEffect } from 'react';
import Jimp from 'jimp';
import '../../App.css';


function Result(props){

	useEffect(() => {
		console.log(props.text);
		let fileName = '../../../assets/red_hat.jpg';
		console.log(fileName);
		let imageCaption = 'Image caption';
		let loadedImage;

		Jimp.read(fileName)
		    .then(function (image) {
		        loadedImage = image;
		        return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
		    })
		    .then(function (font) {
		        loadedImage.print(font, 10, 10, imageCaption)
		                   .write(fileName);
		    })
		    .catch(function (err) {
		        console.error(err);
		    });
	})

	return(
		<div>
			<p>This your hat:</p>
		</div>
	)
}

export default Result;