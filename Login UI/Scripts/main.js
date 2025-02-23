
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('audioPlayed')) {
        var audio = new Audio('/Projects/Login%20UI/media/sounds/startup.mp3');
        audio.play().then(function() {
            sessionStorage.setItem('audioPlayed', 'true');
        }).catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    }
});
