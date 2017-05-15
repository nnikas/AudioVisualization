"use strict";

// Load songs
const AUDIO_SOURCES = [
	'songs/04 Sorry.mp3',
	'songs/11 Dust.mp3',
	'songs/Cry(just A Little.mp3',
	'songs/Xxplosive.mp3'
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

