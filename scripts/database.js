export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        // Remove this comment and create some villain objects
        {
            id: 1,
            name: "Tom Villain",
            power: "Super Eloquence"
        },
        {
            id: 2,
            name: "Kurt Vile",
            power: "Disgust-o-spew"
        }
    ],
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}