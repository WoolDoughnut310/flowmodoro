import ringtone from "./assets/ringtone.mp3";
import analogTimer from "./assets/analog-timer.mp3";
import xylophoneMelody from "./assets/xylophone-melody.mp3";

export const sounds: { [key: string]: string } = {
    ringtone,
    analogTimer,
    xylophoneMelody
};

export const playSoundSrc = (src: string) => {
	const audio: HTMLAudioElement | null = document.getElementById("audio-player") as HTMLAudioElement;
    if (!audio) return;

    audio.src = src;
	audio.play();
}

export const playSound = (sound: string) => {
    if (!Object.keys(sounds).includes(sound)) return;
	playSoundSrc(sounds[sound]);
}