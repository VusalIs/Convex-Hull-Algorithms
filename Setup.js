var canvas;
var ctx;
var pointColor;
var helperLineColor;
var hullColor;
var backgroundColor;
var checkingColor;
var hullLineColor;
var selectedAlgorithm;
var pointsCount;
var points = [];
var dpi;
var currentPoint;
var nextPoint;
var checkingPoint;
var hullPoints = [];
var interval;

function setup() {
    setupCanvas();
    upperBoundaryX = canvas.width;
    upperBoundaryY = canvas.height;

    setRandomPoints();
    
    giftSetup();
    interval = setInterval(() => draw(), interval);
}

function setupCanvas() {
    document.body.innerHTML = `<canvas id="myCanvas"></canvas>`;
    canvas = document.getElementById('myCanvas');
    canvas.style.background = backgroundColor;
    ctx = canvas.getContext('2d');
    dpi = window.devicePixelRatio;
    fix_dpi();
}

function fix_dpi() {
    //create a style object that returns width and height
    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        },
    };
    //set the correct attributes for a crystal clear image!
    canvas.setAttribute('width', style.width() * dpi);
    canvas.setAttribute('height', style.height() * dpi);
}

function setRandomPoints() {
    for (var i = 0; i < pointsCount; i++) {
        points.push(new Point(findRandomValueInRange(100, upperBoundaryX - 100), findRandomValueInRange(100, upperBoundaryY - 100)));
    }
}

function findRandomValueInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function initAllVariableAndSetup() {
    pointColor = '#f3c623';
    helperLineColor = '#00a8cc';
    hullLineColor = '#844685';
    backgroundColor = '#faf4ff';
    checkingColor = '#f3c623';
    hullColor = '#10375c';

    selectedAlgorithm = document.getElementById('selected-algorithm').value;
    pointsCount = document.getElementById('points-number').value;
    interval = document.getElementById('interval').value;
    setup();
}
