console.log("Advanced Objects - this keyword\n")
// this. access objects properties
const robot = {
    model : '1E78V2',
    energyLevel : 100, 
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
}

console.log(robot.provideInfo())

console.log("_______________________")
console.log("Advanced Objects - get keyword\n")

const robot2 = {
    model : '1E78V2',
    _energyLevel : 100, 
    get energy(){
        if(typeof this._energyLevel === "number"){
            return `My Current Energy Level Is ${this._energyLevel}`
        }
    }

}

console.log(robot2.energy)

console.log("_______________________")
console.log("Advanced Objects - set keyword\n")

const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === "number" && num >= 0){
        this._numOfSensors = num
      } else {
        return 'Pass in a number that is greater than or equal to 0'
      }
    }
    
  };
  
  robot3.numOfSensors = 100 
  console.log(robot3.numOfSensors)
  
  
console.log("_______________________")
console.log("Advanced Objects - Factory Function\n")

const robotFactory = (model, mobile) => {
    return {
        model : model, 
        mobile, // destructuring (property value shorthand) allows the property to stand alone - unlike how model is repeated. 
        beep () {
            console.log('Bleep Bloop')
        }
    }
}

const terminator = robotFactory("Good Guy", "yes")
console.log(terminator.mobile)


console.log("_______________________")
console.log("Advanced Objects - Deconstruction Assignment\n")

const newRobot = {
    model : '1E78V2', 
    mobile : true, 
    functionality : {
        beep () {
            console.log('Beep Beep')
        }, 
        fireLaser () {
            console.log("Pew Pew")
        }
    }
}

const {functionality} = newRobot // deconstructed assignment is an object key wrapped in curly braces 
functionality.beep()

console.log("_______________________")
console.log("Advanced Objects - Built-in Object Methods\n")

const newRobot2 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const newRobot2Keys = Object.keys(newRobot2) // returns an array of the keys inside 
console.log(newRobot2Keys)

const newRobot2Entries = Object.entries(newRobot2) // returns an array of both the key and value of the properties in an object.
console.log(newRobot2Entries)