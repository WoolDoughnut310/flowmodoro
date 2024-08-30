import ringtone from "./assets/ringtone.mp3";
import analogTimer from "./assets/analog-timer.mp3";
import xylophoneMelody from "./assets/xylophone-melody.mp3";
import startstop from "./assets/startstop.wav";

export const sounds: { [key: string]: string } = {
    ringtone,
    analogTimer,
    xylophoneMelody,
	startstop
};

export const playSound = (sound: string) => {
    if (!Object.keys(sounds).includes(sound)) return;
	
    const audio: HTMLAudioElement | null = document.getElementById("audio-player") as HTMLAudioElement;
    if (!audio) return;

    audio.src = sounds[sound];
	audio.play();
}
