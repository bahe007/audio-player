# audio-player
A simple circular HTML5 audio player. 

[Audio-Player Look](https://raw.githubusercontent.com/bahe007/audio-player/master/Preview.png?raw=true "Title")

Features: 
- Circular Progress Bar
- Play/Pause-Button
- clickable text below the player UI, starts audio from beginning
- 30fps update frequency

Usage:
1. Reference the CSS and JavaScript file in your html: 
```
<link rel="stylesheet" type="text/css" media="screen" href="audio-player.css" />
<script src="audio-player.js"></script>
```
2. Place the audio player and the UI in your HTML: 
```
<audio>
    <source src="sound.mp3" type="audio/mpeg">
    <source src="sound.ogg" type="audio/ogg">
    Sadly, your browser doesn't support audio playback :(
</audio>

<div class="audio-player">
    <div class="audio-player-back-ring"></div>
    <div class="audio-player-back-ring-center"></div>

    <div class="audio-player-progress-ring">
        <div class="audio-player-progress-segment audio-player-progress-segment-1" style="display: none;"></div>
        <div class="audio-player-progress-segment audio-player-progress-segment-2" style="display: none;"></div>
        <div class="audio-player-progress-segment audio-player-progress-segment-3" style="display: none;"></div>
        <div class="audio-player-progress-segment audio-player-progress-segment-4" style="display: none;"></div>
        <div class="audio-player-progress-ring-center"></div>
    </div>

    <div class="audio-player-controls">
        <img src="Play-Icon.svg" alt="Tastatur-Demo abspielen" class="audio-player-button">
    </div>
</div>
<p class="audio-player-text">Listen!</p>
``` 

Dependencies:
- jquery
