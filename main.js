function preload() {

}
function setup() {
    tintcolor = "";
    canvas = createCanvas(600, 500);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();

}
function draw() {
    stroke(50);
    ellipse(300, 250, 600, 450) ;
    image(video, 50, 125, 500, 250);
}
function take_snapshot() {
    save('selfie.png');
}