import bell from "bell.mp3";
import ring from "ring.wav";
import scifiBeep from "scifi-beep.wav";

export const sounds = {
    bell,
    ring,
    scifiBeep
};

export const playSound = (sound: string) => {
    if (!sounds.includes(sound)) return;

    const audio = new Audio(sounds[sound]);
  
    audio.addEventListener("canplaythrough", () => {
    audio.play();
    });
}