"use strict";

var body = document.getElementsByTagName("body")[0];
var s = document.createElement("script");
s.type = "text/javascript";

	

const AUDIO_SOURCES = [
    'What So Not - High You Are (Branchez Remix).mp3',
];

var audioFile, analyzer;

function preload() {
    var audioSrc = AUDIO_SOURCES[Math.floor(Math.random() * AUDIO_SOURCES.length)];
    audioFile = loadSound(audioSrc);
}

function keyPressed() {
	
    if (key === " ") {
        if (audioFile.isPlaying()) {
            audioFile.pause();
        }
        else {
            audioFile.play();
        }
    }   
    else if (key === 'w'){
			s.src = "visual/spectrum.js";
	}
	else{
			s.src = "visual/waveform.js";
	}
   body.appendChild(s); 
}

