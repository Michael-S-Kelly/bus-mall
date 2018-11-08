'use strict';

//global variables.

var lastSet = [];
var totCl = 0;
var mainEL = document.getElementById('mainStuff');
var div1El = document.createElement('div');
var titleH1El = document.createElement('h1');
//create body main
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


var products = [];//variable array created to Object data

//create Object Constructor
function Product(name, catPic) {
  this.name = name; //name of product
  this.catPic = catPic; //href of object
  this.votes = 0; //number of votes received for product
  this.views = 0;
  
  
  var cOne = Math.floor(Math.random() * 255);
  var cTwo = Math.floor(Math.random() * 255);
  var cThree =Math.floor(Math.random() * 255);
  
  this.bgCol = `rgba(${cOne}, ${cTwo}, ${cThree}, 0.2)`;
  this.bdrCol = `rgba(${cOne}, ${cTwo}, ${cThree}, 1)`;
  
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
  
  var firstRand;
  var secondRand;
  var thirdRand;
  do {
    firstRand = Math.floor(Math.random() * products.length);
    secondRand = Math.floor(Math.random() * products.length);
    thirdRand = Math.floor(Math.random() * products.length);
  } while (lastSet.includes(firstRand) || lastSet.includes(secondRand) || lastSet.includes(thirdRand) || firstRand === secondRand || firstRand === thirdRand || secondRand === thirdRand);
  
  lastSet[0] = firstRand;
  lastSet[1] = secondRand;
  lastSet[2] = thirdRand;
  
  console.log(lastSet);
  
  firstImgEl.src = products[firstRand].catPic;
  secondImgEl.src = products[secondRand].catPic;
  thirdImgEl.src = products[thirdRand].catPic;

  firstImgEl.name = products[firstRand].name;
  secondImgEl.name = products[secondRand].name;
  thirdImgEl.name = products[thirdRand].name;
  
  products[firstRand].views++;
  products[secondRand].views++;
  products[thirdRand].views++;
  
  totCl++;
  
  if (totCl > 25) {
    firstImgEl.removeEventListener('click', imgClk);
    secondImgEl.removeEventListener('click', imgClk);
    thirdImgEl.removeEventListener('click', imgClk);
    
    results();
  }
}
console.log('before function call');
function imgClk(event) {
  console.log('after function call before loop');
  for (var i = 0; i < products.length; i++) {
    console.log('after loop is called before if arguement');
    console.log(JSON.stringify(event.target));
    if (event.target.name === products[i].name) {
      console.log('after if argument before vote is recorded');
      products[i].votes++;
      console.log('after votes are recorded', products[i].votes);
    }
  }
  randImg();
}

randImg();

function results(){ 
  for (var i = 0; i < products.length; i++) {
    var resultsEl = document.getElementById('results1').getContext('2d');
    //console.log('after resultsEl is established');
    // var crtEl = document.createElement('chart').getContext('2d');
    // resultsEl.appendChild(crtEl);
    // crtEl.id = 'chart1';
    
    var names = [];
    
    //var listEl = document.createElement('li');
    //listEl.textContent = 'There are ' + products[i].votes + ' votes for the ' + products[i].name + ' and ' + products[i].views + 'views';
    
    for (var j = 0; j < products.length; j++) {
      names.push(products[j].name);
    }
    
    var votes = [];
    for (var k = 0; k < products.length; k++) {
      votes.push(products[k].votes);
    }
    
    var bgClrs =[];
    for (var l = 0; l < products.length; l++) {
      bgClrs.push(products[l].bgCol);
    }
    
    var bdrClrs = [];
    for (var m = 0; m < products.length; m++) {
      bdrClrs.push(products[m].bdrCol);
    }

    var rChart = {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# of Votes',
          data: votes,
          backgroundColor: bgClrs,
          borderColor: bdrClrs,
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
    };
    //cmEl.appendChild(listEl);
    //mainEL.appendChild(resultsEl);
  }
  return new Chart(resultsEl, rChart);
}

if(localStorage.getItem('voteData')) {
  var voteData = localStorage.getItem('voteDate');
  myChart.data.datasets[0].data = JSON.parse(voteData);

  myChart.update();
}

div1El.addEventListener('click', function(event) {


var eventId = event.target.id;
var votesIdx = products.votes.indexOf(eventId);

if (votesIdx !== -1) {
  myChart.data.datasets[0].products.votes);
  myChart.update();

  var dataRecord = JSON.stringify(myChart.data.datasets[0].products.data);
  localStorage.setItem('voteData', dataRecord);
}
})

firstImgEl.addEventListener('click', imgClk);
secondImgEl.addEventListener('click', imgClk);
thirdImgEl.addEventListener('click', imgClk);