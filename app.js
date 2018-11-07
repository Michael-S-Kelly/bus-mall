'use strict';

var lastSet = [];
var totCl = 0;
//create body main
var mainEL = document.getElementById('mainStuff');
var div1El = document.createElement('div');
var titleH1El = document.createElement('h1');
mainEL.appendChild(titleH1El);
titleH1El.textContent = 'Please click on your favorite product of the three choices bellow.';
div1El.id = 'div1';
var firstImgEl = document.createElement('img');
var secondImgEl = document.createElement('img');
var thirdImgEl = document.createElement('img');
var cmEl = document.createElement('ul');
cmEl.id = 'pollResults';
mainEL.appendChild(div1El);
mainEL.appendChild(cmEl);
div1El.appendChild(firstImgEl);
div1El.appendChild(secondImgEl);
div1El.appendChild(thirdImgEl);
//insert title request
firstImgEl.id = 'firstImg';
secondImgEl.id = 'secondImg';
thirdImgEl.id = 'thirdImg';
titleH1El.id = 'request';



var products = [];

function Product(name, catPic) {
  this.name = name; //name of product
  this.catPic = catPic; //href of object
  this.votes = 0; //number of votes received for product
  this.views = 0;
  products.push(this);
}


new Product ('R2D2 Carry-On Bag', './assets/bag.jpg');
new Product ('Banana Slicer', './assets/banana.jpg');
new Product ('Bathroom iPad Holder', './assets/bathroom.jpg');
new Product ('Boots', './assets/boots.jpg');
new Product ('Breakfast Combo Unit', './assets/breakfast.jpg');
new Product ('Meatball Bubblegum', './assets/bubblegum.jpg');
new Product ('Chair', './assets/chair.jpg');
new Product ('Cthulhu Play Figure', './assets/cthulhu.jpg');
new Product ('Duck Mask for Dogs', './assets/dogduck.jpg');
new Product ('Can of Dragon Meat', './assets/dragon.jpg');
new Product ('Pens with Eating Utencil Caps', './assets/pen.jpg');
new Product ('Dust Mop for Pets', './assets/pet-sweep.jpg');
new Product ('Pizza Scissors', './assets/scissors.jpg');
new Product ('Shark Sleeping Bag', './assets/shark.jpg');
new Product ('Dust Mop for Babies', './assets/sweep.png');
new Product ('Can of Unicorn Meat', './assets/unicorn.jpg');
new Product ('Robotic Tenticle USB drive', './assets/usb.gif');
new Product ('Reverse Angled Watering Can', './assets/water-can.jpg');
new Product ('Wine Connoisseur\'s Wine Glass', './assets/wine-glass.jpg');



console.log(products);

//create body header
//create body footer
//generate random index
//render image
//wait for user to select image
//record vote
//generate vote totals
//generate reset button
//wait for user to select reset
//refresh website

//get image based on index number
//check to make sure index is unique (doesn't match the last 6 indexes)
function randImg() {
  var firstRand = Math.floor(Math.random() * products.length);
  while (firstRand in lastSet) {
    firstRand = Math.floor(Math.random() * products.length);
  }

  var secondRand = Math.floor(Math.random() * products.length);
  while (firstRand in lastSet || secondRand === firstRand) {
    secondRand = Math.floor(Math.random() * products.length);
  }

  var thirdRand = Math.floor(Math.random() * products.length);
  while (firstRand in lastSet || thirdRand === firstRand || thirdRand === secondRand) {
    thirdRand = Math.floor(Math.random() * products.length);
  }

  firstImgEl.src = products[firstRand].catPic;
  secondImgEl.src = products[secondRand].catPic;
  thirdImgEl.src = products[thirdRand].catPic;
  lastSet[0] = firstRand;
  lastSet[1] = secondRand;
  lastSet[2] = thirdRand;
  
  //add ++ to click total
  totCl++;
  
  //return to generate random index until click total == 25
  if (totCl === 25) {
    firstImgEl.removeEventListener('click', randImg);
    secondImgEl.removeEventListener('click', randImg);
    thirdImgEl.removeEventListener('click', randImg);
    
    console.log(lastSet[0]);
    console.log(lastSet[1]);
    console.log(lastSet[2]);
    results();
  }
  // this.view[firstRand]++;
  // this.view[secondRand]++;
  // this.view[thirdRand]++;
}

randImg();

function results(){
  for (var i = 0; i < products.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = 'There are ' + products[i].votes + ' votes for the ' + products[i].name + ' and ' + products[i].views + 'views';
    var resultsEl = document.getElementById('results').getContext('2d');
    var resultsChart = new RChart(resultsEl, {
      type: 'bar',
      data: {
        labels: this.name,
        datasets: [{
          label: '# of Votes',
          data: this.votes,
          backgroundColor: ['Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), 0.2)'],
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    cmEl.appendChild(listEl);
    mainEL.appendChild(resultsEl);
  }
}

firstImgEl.addEventListener('click', randImg);
secondImgEl.addEventListener('click', randImg);
thirdImgEl.addEventListener('click', randImg);
