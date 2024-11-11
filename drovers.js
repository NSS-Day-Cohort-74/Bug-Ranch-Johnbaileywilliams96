const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) { //returning a random array of drovers from the database and the amount in the array is dependent on the herd size
        const randomHerderId = Math.floor(Math.random() * allDrovers.length) //math.random retruns a decimel between 0 and 1 generating a random number that selects a drover from the database
        drovers.push(allDrovers[randomHerderId]) //pushes the five random drovers weve selected into the empty drovers array. 
    }
    //added drovers to the return.
    return drovers;

}


module.exports = { hireDrovers }