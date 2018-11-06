'use strict';

var products = [],

function Product(name, src) {
  this.name = name; //name of product
  this.src = src; //href of object
  this.votesForProduct = 0; //number of votes received for product
  this.totalClicks = 0;
  products.push(this);

  this.render;

}

function title() { //generate function to give directions to the user
  var mainEL = document.getElementById('mainStuff');
  var titleH1El = document.createElement('h1');
  mainEL.appendChild(titleH1El);
  titleH1El.textContent = 'Please click on your favorite product of the three choices bellow.';
}

title();

//create body header
//create body footer
//create body main
//insert title request
//generate random index

function getRandomIndex() {
  var i = 0;
  var postedImg = [];
  var exemptProd = [];

  while(postedImg.length < 3) {
    var prodIndex = Math.round(Math.random * products.length);
    postedImg.push(products[prodIndex]);
  }
  console.log(postedImg[0]);
  console.log(postedImg[1]);
  console.log(postedImg[2]);
  console.log(postedImg[3]);
  
};

getRandomIndex();

//check to make sure index is unique (doesn't match the last 9 indexes)
//get image based on index number
//render image
//return to the begining of generate random index loop two more times for a total of 3 images
//wait for user to select image
//record vote
//add ++ to click total
//return to generate random index until click total == 25
//generate vote totals
//generate reset button
//wait for user to select reset
//refresh website


Product.prototype.votesForProduct = function() {

}

/*
var tracker = {
  products: [],
  totalClicks: 0,
  for(i = 0; i < clicks.length; i++){
    this.votesForProduct +=;
    totalClicks = +=;
  }
}


  getUniqueImages: function() {

  },

  renderImages: function() {

  },

  addClickTracker: function() {

  },

  clickHandler: function() {

  },
};

(function createProducts() {

})()
*/

new Products ('R2D2 Carry-On Bag', /asset/bag.jpg);
new Products ('Banana Slicer', /asset/banana.jpg);
new Products ('Bathroom iPad Holder', /asset/bathroom.jpg);
new Products ('Boots', /asset/boots.jpg);
new Products ('Breakfast Combo Unit', /asset/breakfast.jpg);
new Products ('Meatball Bubblegum', /asset/bubblegum.jpg);
new Products ('Chair', /asset/chair.jpg);
new Products ('Cthulhu Play Figure', /asset/cthulhu.jpg);
new Products ('Duck Mask for Dogs', /asset/dog-duck.jpg);
new Products ('Can of Dragon Meat', /asset/dragon.jpg);
new Products ('Pens with Eating Utencil Caps', /asset/pen.jpg);
new Products ('Dust Mop for Pets', /asset/pet-sweep.jpg);
new Products ('Pizza Scissors', /asset/scissors.jpg);
new Products ('Shark Sleeping Bag', /asset/shark.jpg);
new Products ('Dust Mop for Babies', /asset/sweep.png);
new Products ('Can of Unicorn Meat', /asset/unicorn.jpg);
new Products ('Robotic Tenticle USB drive', /asset/usb.gif);
new Products ('Reverse Angled Watering Can', /asset/water-can.jpg);
new Products ('Wine Connoisseur\'s Wine Glass', /asset/wine-glass.jpg);