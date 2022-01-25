
class Car extends Vehicle {
constructor (make, model, year, color, mileage){
    super (make, model, year, color, mileage);
    this.maximumPassengers = 6;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 200;
    this.fule = 100;
    this.scheduleService = false;
}

loadPassenger(num) {
    if (this.passenger == this.maximumPassengers){
        console.log('True')
    }
}

start() {
    if(this.fule > 0)
    console.log('good on fule')
}

scheduleService(mileage) {
    if(this.mileage > 30000)
    console.log('time for maintenance')
}










}














// //this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

// //this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)