var index = 0;

function giftSetup() {
    // Start the algorithm
    points.sort((point1, point2) => point1.x - point2.x);

    hullPoints.push(points[0]);
    currentPoint = points[0];
    nextPoint = points[1];
    checkingPoint = points[2];
}

function giftAlgorithm() {
    if (index >= points.length) {
        hullPoints.push(nextPoint);
        currentPoint = nextPoint;
        nextPoint = points[0];
        index = 0;
        if (currentPoint.x == hullPoints[0].x && currentPoint.y == hullPoints[0].y) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawMainPoints();
            clearInterval(interval);
        }
    }

    if (isInLeft()) {
        nextPoint = checkingPoint;
    }
    checkingPoint = points[index];
    index++;
}

function isInLeft() {
    return (
        (checkingPoint.y - currentPoint.y) * (nextPoint.x - currentPoint.x) -
            (nextPoint.y - currentPoint.y) * (checkingPoint.x - currentPoint.x) <
        0
    );
}
