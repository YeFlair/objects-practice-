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
  
  
  