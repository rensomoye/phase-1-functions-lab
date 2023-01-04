// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}    

function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet (start, destination)
    if (totalDistance <= 400) {
        return 0
    } else if (totalDistance > 400 && totalDistance <= 2000){
        return (totalDistance - 400) * .02
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}