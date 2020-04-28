function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMainPoints();
    // Draw helper lines
    drawLine(currentPoint, checkingPoint, helperLineColor, 2);
    drawLine(currentPoint, nextPoint, helperLineColor, 2);

    //  Draw checking and next points
    ctx.fillStyle = checkingColor;
    nextPoint.show();
    checkingPoint.show();
    giftAlgorithm();
}

function drawMainPoints() {
    // Draw line between convex points
    ctx.fillStyle = hullLineColor;
    for (var i = 0; i < hullPoints.length - 1; i++) {
        drawLine(hullPoints[i], hullPoints[i + 1], hullLineColor, 5);
    }

    // Draw normal points
    ctx.fillStyle = pointColor;
    points.forEach(point => point.show());

    // Give specific color and draw convex points
    ctx.fillStyle = hullColor;
    hullPoints.forEach(point => point.show());

    currentPoint.show();
}

function drawLine(pointStart, pointEnd, color, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(pointStart.x, pointStart.y);
    ctx.lineTo(pointEnd.x, pointEnd.y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.show = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
        ctx.fill();
    };
}
