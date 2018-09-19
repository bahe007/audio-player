let audioIsPlaying = false;

$( document ).ready(function() {
    let player = $("audio")[0];

    // play/pause
    $(".audio-player").click(function() {
        let player = $("audio")[0];

        if ( player.paused ) {
            player.play();
            audioIsPlaying = true; 
            checkPlayerStatus();

            $(".audio-player-button").attr("src", "Pause-Icon.svg")
        } else {
            player.pause();
            audioIsPlaying = false 

            $(".audio-player-button").attr("src", "Play-Icon.svg")
        }
    });

    // restarts the whole audio from the beginning
    $(".audio-player-text").click(function() {
        let player = $("audio")[0];

        if ( player.paused ) {
            $(".audio-player-progress-segment-1").css("display", "none");
            $(".audio-player-progress-segment-2").css("display", "none");
            $(".audio-player-progress-segment-3").css("display", "none");
            $(".audio-player-progress-segment-4").css("display", "none");
            
            player.currentTime = 0.0;
            player.play();
            audioIsPlaying = true; 
            checkPlayerStatus();

            $(".audio-player-button").attr("src", "Pause-Icon.svg")
        }
    });

    // resets the player, if the audio is over
    player.ontimeupdate = function () {
        const progress = player.currentTime/player.duration;
        
        if ( progress == 1.0 ) {
            audioIsPlaying = false; 
            updateProgressUI();

            $(".audio-player-button").attr("src", "Play-Icon.svg")

            $(".audio-player-progress-segment-1").css("display", "none");
            $(".audio-player-progress-segment-2").css("display", "none");
            $(".audio-player-progress-segment-3").css("display", "none");
            $(".audio-player-progress-segment-4").css("display", "none");
        }
    }
});

// Checks, if player is playing and updates the UI accordingly, if so
function checkPlayerStatus() {    
    if ( audioIsPlaying ) {
        let player = $("audio")[0];
        let progress = player.currentTime/player.duration;
        updateProgressUI(progress);

        setTimeout(function () {            
            checkPlayerStatus();
        }, 33);
    }
}

// updates the progress bar
function updateProgressUI(progress) {
    if ( progress < 0.25 ) {
        $(".audio-player-progress-segment-1").css("display", "block");

        let segmentProgress = -(90-progress*360.0);
        $(".audio-player-progress-segment-1").css("transform", "skew(0deg,"+segmentProgress+"deg)")
    } else if ( progress < 0.5 ) {
        $(".audio-player-progress-segment-1").css("transform", "skew(0deg, 0deg)")

        let segmentProgress = (180-progress*360.0);
        $(".audio-player-progress-segment-2").css("transform", "skew("+segmentProgress+"deg, 0deg)")
        $(".audio-player-progress-segment-2").css("display", "block");
    } else if ( progress < 0.75 ) {
        $(".audio-player-progress-segment-2").css("transform", "skew(0deg, 0deg)")

        let segmentProgress = -(270-progress*360.0);
        $(".audio-player-progress-segment-3").css("transform", "skew(0deg,"+segmentProgress+"deg)")
        $(".audio-player-progress-segment-3").css("display", "block");
    } else {
        $(".audio-player-progress-segment-3").css("transform", "skew(0deg, 0deg)")

        let segmentProgress = (360-progress*360.0);
        $(".audio-player-progress-segment-4").css("transform", "skew("+segmentProgress+"deg, 0deg)")
        $(".audio-player-progress-segment-4").css("display", "block");
    }
}
