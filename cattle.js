const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes
    //size is changed from herdsize.
    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }