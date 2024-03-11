/**
 *
 * @param {number} duration
 * @param {number} frequency
 */
function playBeep(duration, frequency) {
	// Create audio context
	const audioContext = new window.AudioContext();

	// Create oscillator node
	const oscillator = audioContext.createOscillator();
	oscillator.type = 'sine'; // Sine wave
	oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Set frequency

	// Connect oscillator to output
	oscillator.connect(audioContext.destination);

	// Start and stop oscillator after specified duration to create a beep
	oscillator.start();
	setTimeout(function () {
		oscillator.stop();
	}, duration);
}

/** @type {boolean | any} */
let wakeLock = false;

async function requestWakeLock() {
	try {
		wakeLock = await navigator.wakeLock.request('screen');
	} catch (error) {
		return false;
	}
}

async function releaseWakeLock() {
	if (wakeLock === false) return false;

	try {
		return await wakeLock.release();
	} catch (error) {
		return false;
	}
}
export { playBeep, requestWakeLock, releaseWakeLock };
