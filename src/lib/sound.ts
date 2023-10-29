import bell from "./assets/bell.mp3";
import ring from "./assets/ring.wav";
import scifiBeep from "./assets/scifi-beep.wav";

export const sounds: { [key: string]: string } = {
    bell,
    ring,
    scifiBeep
};

export const playSound = (sound: string) => {
    if (!Object.keys(sounds).includes(sound)) return;

    const audio: HTMLAudioElement | null = document.getElementById("audio-player") as HTMLAudioElement;
    if (!audio) return;

    audio.src = sounds[sound];

    audio.addEventListener("canplaythrough", () => {
        audio.play();
    });
}
