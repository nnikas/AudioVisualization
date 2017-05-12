"use strict";

var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");
js.type = "text/javascript";

	

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
    if (key === 'w'){
			js.src = "visual/spectrum.js";
	}
	else{
			js.src = "visual/waveform.js";
	}
    
}
head.appendChild(js);
