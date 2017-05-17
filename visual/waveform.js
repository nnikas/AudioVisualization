const NUM_BINS = 1024;
const WIDTH = 800;
const HEIGHT = 400;

var colorScale = d3.scale.linear()
    .domain([0, 16, NUM_BINS])
    .range(['#FF4E50', '#FC913A', '#F9D423']);

var xScale = d3.scale.linear()
    .domain([0, NUM_BINS])
    .range([0, WIDTH]);

var yScale = d3.scale.linear()
    .domain([-1, 1])
    .range([HEIGHT, 0]);

function setup() {
    createCanvas(WIDTH, HEIGHT);
    audioFile.loop();
    analyzer = new p5.FFT(.7, NUM_BINS);
}

function draw() {
    var waveform = analyzer.waveform();

    background(51, 153, 255);
    beginShape();
    stroke(255);
    strokeWeight(2);
    //nofill();


    for (var i = 0; i < NUM_BINS; i+=.1) {
        var x = xScale(i);
        var y = yScale(waveform[i]);
        vertex(x, y);
        var binFill = colorScale(i);
        fill(binFill);
        
    }

    endShape();


}
