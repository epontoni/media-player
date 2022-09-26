import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const playPause: HTMLElement = document.querySelector("#play-pause");
const muteUnmute: HTMLElement = document.querySelector("#mute-unmute");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

playPause.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(e => {
        console.log(e.message)
    })
}