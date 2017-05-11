"use strict";

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
}
