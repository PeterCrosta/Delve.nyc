import NTA from './NTA.json'
import fs from 'fs'

// console.log(NTA)

const processNTA = gJ => {
    const res = []
    // const newGJ = JSON.parse(gJ)
    gJ.features.forEach(neigh => {
        const {coordinates, type} = neigh.geometry
        const {id} = neigh
        const {OBJECTID, BoroCode, BoroName, NTACode, NTAName, Shape__Area, Shape__Length} = neigh.properties
        res.push({
            boroName: BoroName,
            boroCode: BoroCode,
            objectId: OBJECTID,
            ntaCode: NTACode,
            ntaName: NTAName,
            shapeArea: Shape__Area,
            shapeLength: Shape__Length,
            coords: coordinates,
            type: type,
            id: id
        })
    })
    return res
}

fs.writeFile('/Users/petercrosta/Desktop/personal-work/delve/neighborhoodInfo.js', JSON.stringify(processNTA(NTA)), err => {
    if (err) {
        console.error(err)
        return
    }
})

// console.log(processNTA(NTA))