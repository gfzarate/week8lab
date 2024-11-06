// Car.js - include Car constructor function here, or import from Car.js if modular support is available
function Car(make, speed) {
    this.make = make;
    this.speed = speed; // speed in km/h
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// EV.js - Extend Car to implement EV
function EV(make, speed, charge) {
    Car.call(this, make, speed); // Inherit make and speed from Car
    this.charge = charge;        // Battery charge in percentage
}

// Link EV prototype to Car prototype to inherit methods
EV.prototype = Object.create(Car.prototype);

// Define chargeBattery method
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery charged to ${this.charge}%`);
};

// Override accelerate method for EV class
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
};

// Test data
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
tesla.brake();      // Tesla going at 135 km/h
tesla.chargeBattery(90); // Battery charged to 90%
tesla.accelerate(); // Tesla going at 155 km/h, with a charge of 89%
