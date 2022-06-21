music_1 = "music.mp3";
/*music_2 = "music2.mp3";*/
leftwristy = 0;
leftwristx = 0;
right_wrist_x = 0;
right_wrist_y = 0;
leftWrist = 0;
Status = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
function preload() {
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');

        if (scoreLeftWrist > 0.2) {
            circle(leftwristx, leftwristy, 20);
            music_1.play();
        music_2.stop();
        }
      
        if (scoreRightWrist > 0.2) {
            circle(rightwristx, rightwristy, 20);
            music_2.Play();
          
        }

        

  
}

function modelLoaded() {
    console.log("Posenet is model Loaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWirst = " + scoreLeftWrist);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("left wristx = " + leftwristx, "left wristy = " + leftwristy);

        rightwristx = rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("right wristx = " + rightwristx, "right wristy = " + rightwristy);
    }

}