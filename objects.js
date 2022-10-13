const fasterShip = {
    'Fuel Type':'Turbo Fuel', //keys don't need quoates unless a space charatcer is involved
    color:'silver'
}
console.log(fasterShip)

console.log("__________________________\n")
console.log("Accessing Object Properties: Dot Notation")
let spaceship = {
    'Fuel Type':'Turbo Fuel',
    color:'orange',
    homePlanet:'Earth',
    'Travel Path':["Mars", "Venus","Saturn"],
    numCrew:5
}

console.log(`The SpaceShip color is: ${spaceship.color}`)
console.log(`This SpaceShip Home Planet is ${spaceship.homePlanet}`)

console.log("__________________________\n")
console.log("Accessing Object Properties: Bracket Notation")
spaceship['Fuel Type'] // must use bracket notation when key has spaces, numbers or special charcters
spaceship['color']

console.log("__________________________\n")
console.log("Property Assignment: update / create / delete")
/*
    objects decleared with "const" are still mutable.
        • add new properties
        • change current properties


    let spaceship = {
    'Fuel Type':'Turbo Fuel',
    color:'orange',
    homePlanet:'Earth',
    'Travel Path':["Mars", "Venus","Saturn"],
    numCrew:5
}
*/
console.log("Updated Property:")
spaceship.numCrew = 10 // updating the crew number from 5 to 10
console.log(`Number of crew members: ${spaceship.numCrew}\n`)

console.log("Created Property:")
spaceship.numOfEngines = 4 // creating a numOfEngines property
console.log(spaceship)

console.log("Deleted Property:")
delete spaceship['Travel Path']
console.log(spaceship)

console.log("__________________________\n")
console.log("Obejcts Methods:")
const alienMessage = {
    invade() {
        console.log("I Am Coming To Take Over")
    },
    retreat() {
        console.log("Nevermind - goodbye")
    }
}

alienMessage.retreat()

console.log("__________________________\n")
console.log("Nested Objects:")
const lakers = {
    players : {
        positions : {
            pointGuard : {
                name : "Russel WestBrook",
                jerseyNumber : 0,
                homeTown : "Long Beach, California"
            }, 
            shootingGuard : {
                name : "Austin Reaves",
                jerseyNumber : 15, 
                homeTown : "Newark, Arkansas"
            }, 
            smallForward : { 
                name : "Lebron James", 
                jerseyNumber : 6, 
                homeTown : "Akron, Ohio", 
            }, 
            powerFoward : {
                name: "Anthony Davis", 
                jerseyNumber : 3, 
                homeTown : "Chicago, Illionis"
            },
             
        }
    }, 
    coaches : {
        headCoach : {
            name : "Darvin Hamm",
            homeTown : "Saginaw, Michigan"
        }, 
        assiantCoach : {
            name : "Chris Jent"
        }
    }
}

console.log("__________________________\n")
console.log("Looping Through Objects")

// for .. in loop will excute properties in a object
for (member in lakers.players.positions){
    console.log(`${member}: ${lakers.players.positions[member].name}`)
}