var video = document.getElementById("miVideo");

video.addEventListener("ended", function() {
    video.currentTime = 0; // Reinicia la reproducción al principio del video
    video.play(); // Inicia la reproducción automáticamente
});
