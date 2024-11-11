const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}
// generating random numbers for createMountains functions and pushes it down to the function/for loop located below. 
const createMountains = () => { 
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

//journey maker is not a function generating a random journey for the drovers to go on. 
const journeyMaker = () => {
    const journey = []
    
    const areas = {
        rivers: createRivers(), //added an s to the end of each function
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }
        //    takes the random number above and iterates through said number generating multiple rivers or forests that the journey will go through 
    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}
 // Added journeyMaker to module.exports 
module.exports = {
    createRivers, createForests,
    createMountains, createPlains, journeyMaker
}