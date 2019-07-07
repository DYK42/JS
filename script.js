let budget, nameShope, time, price;

function start() {
	budget = +prompt('Ваш бюджет?', '');
	while(isNaN(budget) || budget ==  "" || budget == null) {
		budget = +prompt('Ваш бюджет?', '');
	}
	nameShope = prompt('Название магазина?', '').toUpperCase();
	time = 21;
}
// start();

let mainList = {
	mainBudget: budget,
	mainNameShope: nameShope,
	shopGoods: [],
	employers: {
		number: [],
		name: []
	},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (var i = 0; i < 3; i++) {
			var typeGoods = prompt('Какой тип товаров хотите купить?', '');
			if((typeof(typeGoods)) === 'string' && typeGoods != null && typeGoods != '' && typeGoods.length < 50) {
				console.log('Хорошо!');
				mainList.shopGoods[i] = typeGoods;
			} else {
				if(typeGoods == null || typeGoods == '') {
					console.log('Попробуйте еще раз!');
					i--;
				}
			}
		}
	},
	workTime: function workTime(time) {
		if(time < 0) {
			console.log('Такого не может быть!');
		} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}
	},
	dayBudget: function dayBudget() {
		alert('Ваш бюджет на день: ' + mainList.mainBudget / 30);
	},
	discountSystem: function discountSystem(price) {
		if(mainList.discount == true) {
			price *= 0.8;
		}
	},
	employersPeople: function employersPeople() {
		for(let i = 0; i <= 3; i++) {
			let nameEmployers = prompt('Введите имя сотрудника.');
			mainList.employers.number[i] = i;
			mainList.employers.name[i] = nameEmployers;
		}
	},
	chooseShopItems: function chooseShopItems() {
		while(true) {
			let items = prompt('Введите список товаров через запятую ', '').replace(/ /g, '');
			if (items == null || items == '') {
				continue;
			} else {
				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt('Подождите еще...', '').replace(/ /g, ''));

				mainList.shopItems.sort();
				console.log(mainList.shopItems);
				for (var i = 0; i <= mainList.shopItems.length - 1; i++) {
					if (!isNaN(mainList.shopItems[i]) || typeof(mainList.shopItems[i]) != 'string' || mainList.shopItems[i] == null || mainList.shopItems[i] == undefined || mainList.shopItems[i] == '') {
						let noItems = mainList.shopItems.splice(i, 1);
						console.log('Удалили элемент ' + i + ' : ' + noItems);
						i--;
					} else {
						for (var j = mainList.shopItems[i].length - 1; j >= 0; j--) {
							if (!isNaN(mainList.shopItems[i].charAt(j))) {
								var newItems = mainList.shopItems[i].split('');
								let sym = newItems.splice(j, 1);
								mainList.shopItems[i] = newItems.join('');
								console.log('Удалили элемент из слова ' + j + ' : ' + sym + ' > ' + mainList.shopItems[i]);
								j--;
								/*
								noItems = mainList.shopItems.splice(i, 1);
								console.log('Удалили элемент из слова ' + i + ' : ' + noItems);
								*/
							} else {
								continue;
							}
						}
					}
				}
				break;
			}
		}

		
	}
};

// console.log(mainList);

window.onload = function() {
	mainList.chooseShopItems();
	console.log(mainList.shopItems);
	console.log('яблоки, , апельсины, 247,,ли5мон, 228');
}