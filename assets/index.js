import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playPause = document.querySelector("#play-pause");
const muteUnmute = document.querySelector("#mute-unmute");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

playPause.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(e => {
        console.log(e.message)
    })
}