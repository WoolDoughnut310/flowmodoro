import { get, writable } from "svelte/store";
import { browser } from "$app/environment";
import { playSound } from "./sound";

export interface StatsRow {
    interruptions: number,
    workTime: number,
    breakTime: number,
    timeStartedAt: number,
}

export interface Task {
    id: string,
    name: string,
    checked: boolean,
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

// Set to 1 instead of 0 to avoid playing the timer sound on startup
export const breakDuration = writable(1);

const defaultTasks: Task[] = [];
const defaultSettings: Settings = {
    breakRatio: 5,
    timerSound: "bell",
}

// Persistence with Local Storage
const initialTasks: Task[] = browser ? JSON.parse(window.localStorage.getItem("tasks")) ?? defaultTasks : defaultTasks;
const initialSettings: Settings = browser ? JSON.parse(window.localStorage.getItem("settings")) ?? defaultSettings : defaultSettings;

export const tasks = writable<Task[]>(initialTasks);

// The ID of the selected task
export const selectedTask = writable("");

export const settings = writable<Settings>(initialSettings);

state.subscribe((value) => {
    if (value === States.RUNNING) {
        startTime.set(Date.now());
    } else {
        if (value === States.BREAK) {
            // Calculate the break duration
            const breakTime = get(running) / get(settings).breakRatio;
            breakDuration.set(breakTime);

            // Update the stats for the task
            tasks.update((value) => {
                const currentTaskId = get(selectedTask);
                const currentTask = value.find((item) => item.id === currentTaskId);

                if (!currentTask) return value;

                currentTask.stats.push({
                    interruptions: get(interruptions),
                    workTime: Math.round(get(running) / 1000),
                    breakTime: Math.round(breakTime / 1000),
                    timeStartedAt: get(startTime)
                })


                return [...value.filter((item) => item.id !== currentTaskId),
                    currentTask
                ]
            });
        }

        interruptions.set(0);
        running.set(0);
        startTime.set(0);
    }
});

breakDuration.subscribe((value) => {
    if (value <= 0) {
        state.set(States.UNSET);

        // Play the timer sound
        playSound(get(settings).timerSound);
    }
})

// Update localStorage with the updated values
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
