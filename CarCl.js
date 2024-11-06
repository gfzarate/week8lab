// CarCl.js

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // speed in km/h
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6; // Convert km/h to mi/h
    }

    set speedUS(speed) {
        this.speed = speed * 1.6; // Convert mi/h to km/h
    }
}

// Test data
const car1 = new CarCl('Ford', 120);
console.log(car1.speedUS); // 75 mi/h (120 km/h)
car1.accelerate();         // Ford is going at 130 km/h
car1.brake();              // Ford is going at 125 km/h
car1.speedUS = 50;         // Setting speed in mi/h, converts to km/h
console.log(car1);         // Ford at 80 km/h (50 mi/h)
