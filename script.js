document.addEventListener("DOMContentLoaded", () => {
    const refVideo = document.getElementById("referenceVideo");
    const userVideo = document.getElementById("userVideo");


    // Optional: Sync play/pause and start from beginning
    const syncBtn = document.getElementById("syncVideos");
    if (syncBtn && refVideo && userVideo) {
        syncBtn.addEventListener("click", () => {
            refVideo.currentTime = 0;
            userVideo.currentTime = 0;
            refVideo.play();
            userVideo.play();
        });
    }
});
