var audioFile;

function preload(){
    audioFile =  loadSound('What So Not - High You Are (Branchez Remix).mp3');
}

function setup(){
    createCanvas(800, 400);
    audioFile.loop();
    

}
function draw(){
    background(0);
    fill(255);
    ellipse(800/2,400/2, 50, 50);
}

function keyPressed(){
    if (audioFile.isPlaying()){
        audioFile.pause();
    }
    else {
        audioFile.play();
    }
}