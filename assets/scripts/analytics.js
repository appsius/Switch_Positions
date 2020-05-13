const intervalID = setInterval(() => {
	console.log('Analytics activated...');
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
	clearTimeout(intervalID);
});
