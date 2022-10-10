const futureDate = new Date('2025-04-24 01:00:00');

window.addEventListener('load', () => {
	setInterval(countdown, 1000);
});

function countdown() {
    const daysDisplay = document.getElementById('days');
	const hoursDisplay = document.querySelector('#hours');
	const minutesDisplay = document.querySelector('#mins');
	const secondsDisplay = document.querySelector('#seconds');

	const currentDate = new Date();
	const totalSeconds = (futureDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysDisplay.innerHTML = days.toString().padStart(2, '0');
    hoursDisplay.innerHTML = hours.toString().padStart(2, '0');
    minutesDisplay.innerHTML = minutes.toString().padStart(2, '0');
    secondsDisplay.innerHTML = seconds.toString().padStart(2, '0');
}
