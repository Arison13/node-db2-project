// STRETCH

const cars = [ 
    {
        vin:"11111111111",
        make: "toyota",
        model: "prius",
        mileage: 48000,
        title: "clean",
        transmission: "automatic"
    },
    {
        vin:"11111111112",
        make: "toyota",
        model: "corolla",
        mileage: 58000,
        title: "salvage",
    },
    {
        vin:"11111111113",
        make: "ford",
        model: "focus",
        mileage: 68000
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}