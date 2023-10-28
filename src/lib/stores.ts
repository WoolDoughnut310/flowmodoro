import { get, writable } from "svelte/store";
import { browser } from "$app/environment";

export interface StatsRow {
    interruptions: number,
    workTime: number,
    breakTime: number,
    timeStartedAt: number,
}

export interface Task {
    name: string,
    stats: StatsRow[],
}

export interface Settings {
    breakRatio: number,
    timerSound: string,
}

export enum States {
    UNSET,
    RUNNING,
    BREAK
}

export const state = writable(States.UNSET);
export const running = writable(0);
export const interruptions = writable(0);

export const startTime = writable(0);
export const breakDuration = writable(0);

// Persistence with Local Storage
const defaultTasks: Task[] = [];
const defaultSettings: Settings = {
    breakRatio: 5,
    timerSound: "bell",
}

const initialTasks: Task[] = browser ? JSON.parse(window.localStorage.getItem("tasks")) ?? defaultTasks : defaultTasks;
const initialSettings: Settings = browser ? JSON.parse(window.localStorage.getItem("settings")) ?? defaultSettings : defaultSettings;

export const tasks = writable<Task[]>(initialTasks);
export const settings = writable<Settings>(initialSettings);

state.subscribe((value) => {
    if (value === States.RUNNING) {
        startTime.set(Date.now());
    } else {
        if (value === States.BREAK) {
            breakDuration.set(get(running) / get(settings).breakRatio);
        }

        interruptions.set(0);
        running.set(0);
    }
});

breakDuration.subscribe((value) => {
    if (value <= 0) {
        // Play the timer sound
        state.set(States.UNSET);
    }
})

tasks.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("tasks", JSON.stringify(value))
    }
});
settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("settings", JSON.stringify(value))
    }
})
