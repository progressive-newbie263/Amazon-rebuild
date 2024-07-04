//exercise 17a to 17g is this file.
class Car {
  #brand; //17f, make brand and model private. Include a hashtag before it (# icon)
  #model;
  speed = 0; //17g, make speed a private property and code will not run
  isTrunkOpen = false;

  constructor(carDetails) {
    //17f : swap brand and model of this, into #brand and $model
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    //this.speed = 0;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  }

  //17b
  displayInfo() {
    //17d
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
    
    console.log(`${this.#brand}, ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }

  go() {
    if(!this.isTrunkOpen){
      this.speed += 5;
    }

    if(this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;
    
    if(this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

//trying out cars:
const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
  speed: 0 //not a string '0' cuz it resulted in 05, 055, 0555,....
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
  speed: 0
});

console.log(car1);
console.log(car2);

//17b + c
car1.displayInfo();
car1.go();
car1.go();
car1.brake();
car1.brake();
car1.openTrunk();
car1.go();
car1.displayInfo();


car2.displayInfo();
car2.go();
car2.go();
car2.brake();
car2.go();
car2.go();
car2.displayInfo();



//17e
class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    //delete this.isTrunkOpen;
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;
    
    if(this.speed > 300) {
      this.speed = 300;
    }
  }

  /*
  just for fun:
  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
  */

  displayInfo() {
    console.log(`${this.brand}, ${this.model}, Speed: ${this.speed} km/h`);
  }
}

const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

//17f: trying the code, the result would be undefined except speed, cuz it is not private
car3.displayInfo(); //mclaren, f1, 0; and //undefined, undefined, 0

car3.go();
car3.go();
car3.brake();
car3.displayInfo(); //mclaren, f1, 35; and //undefined, undefined, 35km/h