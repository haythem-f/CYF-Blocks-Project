var dice, rolls, total, item;

// Describe this function...
function rolled_dice_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  total = rolls.reduce((a,b) => a+b, 0);
  element_total.innerText = total;
}

// Describe this function...
function show_winning_info() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_info = document.getElementById('info');
  if (total == 11) {
    element_info.replaceChildren();
    element_info.style.color = '#33ff33';
    element_info.innerText = 'You Won!';
  } else if (total > 11) {
    element_info.replaceChildren();
    element_info.style.color = '#cc0000';
    element_info.innerText = 'You Lost!';
  } else {
    element_info.style.color = '#ffffff';
    element_info.innerText = 'Keep Playing!';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function Remove_List_Item() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  rolls.pop();
  rolls.forEach((item) => {
    let element_list4 = document.getElementById('list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list4.appendChild(new_li2);
  });
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
total = 0;

0;


document.getElementById('button_roll').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  rolls.push(randomMember(dice));
  let new_li = document.createElement('li');
  new_li.innerText = rolls.slice(-1)[0];

  element_list.appendChild(new_li);
  rolled_dice_total();
  show_winning_info();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  Remove_List_Item();
  rolled_dice_total();
  show_winning_info();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();
  rolls = [];
  rolled_dice_total();
  show_winning_info();

});
var earnings, input, earnings_total, expenses_total, expenses, net_balance, balance;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function add_earnings_expenses() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_text = document.getElementById('text');
  input = convertToNumber(document.getElementById('text').value);
  if (input > 0) {
    let element_list1 = document.getElementById('list1');
    let new_li = document.createElement('li');
    new_li.innerText = convertToNumber(document.getElementById('text').value);

    element_list1.appendChild(new_li);
    earnings.push(input);
    balance.push(input);
  } else if (input < 0) {
    let element_list2 = document.getElementById('list2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = convertToNumber(document.getElementById('text').value);

    element_list2.appendChild(new_li2);
    expenses.push(input);
    balance.push(input);
  }
}

// Describe this function...
function sum_earnings() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total1 = document.getElementById('total1');
  earnings_total = earnings.reduce((a,b) => a+b, 0);
  element_total1.innerText = earnings_total;
}

// Describe this function...
function sum_expenses() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total2 = document.getElementById('total2');
  expenses_total = expenses.reduce((a,b) => a+b, 0);
  element_total2.innerText = expenses_total;
}

// Describe this function...
function find_balance() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_net = document.getElementById('net');
  net_balance = balance.reduce((a,b) => a+b, 0);
  element_net.innerText = net_balance;
}


earnings = [];
expenses = [];
balance = [];


document.getElementById('button1').addEventListener('click', (event) => {
  add_earnings_expenses();
  sum_earnings();
  sum_expenses();
  find_balance();

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_list12 = document.getElementById('list1');
  element_list12.replaceChildren();
  let element_list22 = document.getElementById('list2');
  element_list22.replaceChildren();
  let element_text2 = document.getElementById('text');
  element_text2.replaceChildren();
  while (!!earnings.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    earnings.shift();
  }
  sum_earnings();
  while (!!expenses.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    expenses.shift();
  }
  sum_expenses();
  while (!!balance.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    balance.shift();
  }
  find_balance();

});
var images;


var images;


images = ['https://www.picturesofengland.com/img/X/1032733.jpg', 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882947/EducationHub/photos/tourists-at-victoria-falls.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'];
let element_pic = document.getElementById('pic');
let new_img = document.createElement('img');
new_img.setAttribute("src", images[0]);

element_pic.appendChild(new_img);


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  element_pic2.replaceChildren();
  images.push(images.shift());
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", images[0]);

  element_pic2.appendChild(new_img2);

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_pic3 = document.getElementById('pic');
  element_pic3.replaceChildren();
  images.unshift(images.pop());
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", images.slice(-1)[0]);

  element_pic3.appendChild(new_img3);

});