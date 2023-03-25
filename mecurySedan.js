//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;



class Car extends VehicleModule {
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,mileage);
        this.maximumPassengers = 5;
        this.passengers = 0; 
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    scheduleService(){
        if(this.mileage > 30000){
            console.log('serviced')
            return this.scheduleService = true;
            
        }
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

}
//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);
console.log(v.start())

