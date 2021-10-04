leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;
song="";
function preload()
{
song=loadSound("music.mp3");
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+ leftWristX + " leftWristY=" + leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+ rightWristX + " rightWristY=" + rightWristY);
}
}

function draw()
{
image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}