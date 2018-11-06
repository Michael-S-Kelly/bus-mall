'use strict';

var products = [],

function Product(name, src) {
  this.name = name; //name of product
  this.src = src; //href of object
  this.votesForProduct = 0; //number of votes received for product

  products.push(this);



}

function title() {
  var mainEL = document.getElementById('mainStuff');
  var titleH1El = document.createElement('h1');
  mainEL.appendChild(titleH1El);
  titleH1El.textContent = 'Please click on your favorite product of the three choices bellow.';
}

title();
/*
var tracker = {
  products: [],
  totalClicks: 0,
  mainEL: document.getElementById('mainStuff'),
  instructionEl: document.createElement('h1'),
  mainEL: 

  getRandomIndex: function(){
    
  },

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

new products ('R2D2 Carry-On Bag', /asset/bag.jpg);
new products ('Banana Slicer', /asset/banana.jpg);
new products ('Bathroom iPad Holder', /asset/bathroom.jpg);
new products ('Boots', /asset/boots.jpg);
new products ('Breakfast Combo Unit', /asset/breakfast.jpg);
new products ('Meatball Bubblegum', /asset/bubblegum.jpg);
new products ('Chair', /asset/chair.jpg);
new products ('Cthulhu Play Figure', /asset/cthulhu.jpg);
new products ('Duck Mask for Dogs', /asset/dog-duck.jpg);
new products ('Can of Dragon Meat', /asset/dragon.jpg);
new products ('Pens with Eating Utencil Caps', /asset/pen.jpg);
new products ('Dust Mop for Pets', /asset/pet-sweep.jpg);
new products ('Pizza Scissors', /asset/scissors.jpg);
new products ('Shark Sleeping Bag', /asset/shark.jpg);
new products ('Dust Mop for Babies', /asset/sweep.png);
new products ('Can of Unicorn Meat', /asset/unicorn.jpg);
new products ('Robotic Tenticle USB drive', /asset/usb.gif);
new products ('Reverse Angled Watering Can', /asset/water-cancelAnimationFrame.jpg);
new products ('Wine Connoisseur\'s Wine Glass', /asset/wine-WebGLShaderPrecisionFormat.jpg);