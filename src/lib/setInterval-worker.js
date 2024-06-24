self.onmessage = (event) => {
	const { delay } = event.data;
	const intervalID = setInterval(() => postMessage({ elapsed: delay }), delay);
	postMessage({ intervalID });
}