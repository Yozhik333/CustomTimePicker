const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

const tp_btn = document.querySelector('.time-picker .btn button'); //
const tp_to_input = document.querySelector('.form-control'); //

let input_length = document.getElementById('inputId'); // ?

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);

const hr_element2 = document.querySelector('.inputId'); // ?

hr_element.onkeypress = function() {
	if (this.value.length > 1) return false;
	// if (this.value.length > this.maxLength){
	// 	this.value = this.value.slice(0, this.maxLength);
	// }
	if (hr_element.validity.valueMissing && !hr_element.validity.badInput) {
		errorMessage.textContent = "field must not be empty"
		}
}

function hour_change (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(hour);
	}

	hour = e.target.value;
}

function minute_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(minute);
	}

	minute = e.target.value;
}

function hour_up () {
	hour++;
	if (hour > 23) {
		hour = 0;
	}
	setTime();
}
function hour_down () {
	hour--;
	if (hour < 0) {
		hour = 23;
	}
	setTime();
}

function minute_up () {
	minute++;
	if (minute > 59) {
		minute = 0;
		hour++;
	}
	setTime();
}
function minute_down () {
	minute--;
	if (minute < 0) {
		minute = 59;
		hour--;
	}
	setTime();
}

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
}

function formatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}

// tp_btn.onclick = function(time_picker_element){
// 	time_picker_element.dataset = time_picker_element.value;
	
// console.log(time_picker_element);
// }
function peredacha(){
	console.log(hr_element.value);
	tp_to_input.value = hr_element.value + ':' + min_element.value;
	console.log(tp_to_input.dataset);
	console.log(time_picker_element.dataset);
}