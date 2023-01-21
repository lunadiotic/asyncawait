const delayedColorChange = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

// delayedColorChange('red', 1000)
// 	.then(() => delayedColorChange('yellow', 1000))
// 	.then(() => delayedColorChange('green', 1000))
// 	.then(() => delayedColorChange('blue', 1000))
// 	.then(() => delayedColorChange('purple', 1000))
// 	.then(() => delayedColorChange('orange', 1000))
// 	.then(() => delayedColorChange('black', 1000));

async function changeColor() {
	await delayedColorChange('red', 1000);
	await delayedColorChange('yellow', 1000);
	await delayedColorChange('green', 1000);
	await delayedColorChange('blue', 1000);
	await delayedColorChange('purple', 1000);
	await delayedColorChange('orange', 1000);
	await delayedColorChange('black', 1000);
	return 'All Done!';
}

async function printRainbow() {
	await changeColor();
	console.log('All Done! Dari printRainbow');
}

printRainbow();
