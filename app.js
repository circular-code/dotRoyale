"use strict";
/* jshint -W117 */
/* jshint -W098 */

var global = {
  data: []
};

function DataConstructor (speed, width, color) {
  this.xPos = window.innerWidth / random(1,5);
  this.xDir = this.yDir = 1;
  this.yPos = window.innerHeight / random(1,5);
  this.speed = speed;
  this.width = width;
  this.radius = width / 2;
  this.color = color;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

setInterval(pushDataConstructor, 1000);

function pushDataConstructor() {
  global.data.push(new DataConstructor(random(5,15), random(10,50), 'rgba(' + floor(random(0,256)) + ',' + floor(random(0,256)) + ',' + floor(random(0,256)) + ',100)'));
}

function draw() {

  background('#000000');

  global.data.forEach(function(d) {
    fill(d.color);
    ellipse(determinePos(d.xPos, d.xDir, window.innerWidth, 'x', d), determinePos(d.yPos, d.yDir, window.innerHeight, 'y', d), d.width, d.width);
  });
}

function rNumBetw (max, min) {
  if (typeof max === 'undefined'){
      console.log('max undefined');
      return false;
  }
  if (typeof min === 'undefined'){
      min = 0;
  }
  return Math.floor(Math.random()*(max-min)+min);
}

function determinePos (pos, direction, distance, axis, d) {

  d[axis + 'Dir'] = pos >= distance - d.radius ? direction = -1 :
                    pos <= 0 + d.radius ? direction = 1 :
                    direction;

  d[axis + 'Pos'] = pos += direction * d.speed;
  return pos;
}