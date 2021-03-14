let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let info = calendar.querySelector('.info');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

draw(body, year, month);

next.addEventListener('click', function() {
	body.innerHTML = '';
	
	info.innerHTML = months[month+1] + ' ' + year;
	if (month == 11) {
		month = 0;
		year++;
		draw(body, year, month);
	} else {		
		month++;
		draw(body, year, month);
	}
});

prev.addEventListener('click', function() {
	body.innerHTML = '';
	draw(body, getPrevYear(year, month), getPrevMonth(month));
});

function range(count) {
	let arr = [];

	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}

	return arr;
}

function getLastDay(year, month) {
	let date = new Date(year, month - 1, 0);
	let day = date.getDate();
	return day;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month);
	let day = date.getDay();
	return day;
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month, getLastDay(year, month));
	let day = date.getDay();
	return day;
}

function normalize(arr, left, right) {
	let result = [];
	for (let i = 0; i < left; i++) {
		result.push('');
	}
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
	}
	for (let i = 0; i < right; i++) {
		result.push('');
	}

	return result;
}

function chunk(arr, n) {
	// n - количество элементов в подмассиве
	let result = [];
	let k = 0;

	for (let i = 0; i < arr.length / n; i++) {
		let subarray = [];
		for (let j = 0; j < n; j++) {
			subarray.push(arr[k]);
			k++;
		}

		result.push(subarray)
	}

	return result;
}

function createTable(parent, arr) {
	for (let i = 0; i < arr.length; i++) {
		let tr = document.createElement('tr');

		for (let j = 0; j < arr[i].length; j++) {
			let td = document.createElement('td');

			td.innerHTML = arr[i][j];

			tr.appendChild(td);
		}

		parent.appendChild(tr);
		
	}
}

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);

	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
}