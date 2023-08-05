class VehicleClass {
  // can initialise the variable either here or in the constructor
  //1st way
  /*
  color: string;
  constructor(color: string) {
    this.color = color
  }
  */
  //2nd way
  //adding public is like cretaing a new variable
  constructor(public color: string) {}

  drive(): void {
    console.log("Tad Tad")
  }
  protected honk(): void {
    console.log("Honk Honk")
  }

  public playAnotherMusic(): void {
    console.log("1,2,3 get on the dance floor")
  }
 
}

const vehicle =  new VehicleClass('Green');
vehicle.drive()
//vehicle.honk() -> cannot be accessed outside the class


//inheritence
class Car extends VehicleClass {

  constructor(public color: string, wheels: number) {
    super(color)
  }

  //overiding honk and can be used only inside the child classes and inside the base class
  //we are also chanding the access specifier of the honk and 
  honk(): void {
    console.log("Honk Honk in the car")
  }

  private speed(): void {
    console.log('logging the speed')
  }

  //While overding canot chnage the access specifier
  /*
  private playAnotherMusic(): void {
    console.log("1,2,3 get on the dance floor")
  }
  */

}

const car = new Car('Yellow', 20)
car.drive()
car.honk()
//car.speed() -> 
