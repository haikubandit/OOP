// create vehicle class
class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep.';
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Car {
	constructor(make, model, year, numWheels) {
		super(make, model, year, numWheels);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM!!';
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
			throw new Error(`${newVehicle} is not a vehicle!`);
		} else {
			if (this.vehicles.length >= this.capacity) {
				throw new Error('Garage is full.');
			} else {
				this.vehicles.push(newVehicle);
				return 'Vehicle added to garage!';
			}
		}
	}
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
let myFirstCar = new Car('Toyota', 'Corolla', 2005);
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
