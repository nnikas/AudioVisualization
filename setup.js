"use strict";

/* Tried creating a condition where pressing different keys switched between visual js files but couldn't get it to function
var body = document.getElementsByTagName("body")[0];
var s = document.createElement("script");
s.type = "text/javascript";
    else if (key === 'w'){
			s.src = "visual/spectrum.js";
	}
	else{
			s.src = "visual/waveform.js";
	}
   body.appendChild(s); 
*/

// Load songs
const AUDIO_SOURCES = [
    'What So Not - High You Are (Branchez Remix).mp3',
];

var audioFile, analyzer;
//Randomly choose a song  
function preload() {
    var audioSrc = AUDIO_SOURCES[Math.floor(Math.random() * AUDIO_SOURCES.length)];
    audioFile = loadSound(audioSrc);
}

//if space is pressed play/pause the song
function keyPressed() {
	
    if (key === " ") {
        if (audioFile.isPlaying()) {
            audioFile.pause();
        }
        else {
            audioFile.play();
        }
    }   
}

