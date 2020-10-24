const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


setInterval(() => {
	var date = new Date();
	const newHour = date.getHours();
	const newMinute = date.getMinutes();
	const newSecond = date.getSeconds();

	hour.innerHTML = `${newHour}`;
	minute.innerHTML = `${newMinute}`;
	second.innerHTML = `${newSecond}`;

	if(newHour < 10) {
		hour.innerHTML = `0${newHour}`;
	}

	if(newMinute < 10) {
		minute.innerHTML = `0${newMinute}`;
	}

	if(newSecond < 10) {
		second.innerHTML = `0${newSecond}`;
	}

}, 1000);

