//type annotations can be used with every type - primitive and objects

//telling  TS the type of value to expect
//primitive
let numApples: number = 5
let speed: string = 'fast'
let nothingmuch: null = null
let nothing: undefined = undefined

//objects
let date: Date = new Date()

//Array
let dogBreed: string[] = ['Lab', 'huksy']

//class
class Dog {

}
let dog: Dog = new Dog()

//point is the variable ans we are assigning object to it
//have to give the same properties value, no less or no more
// {x: number; y:number} -> extr info
let point: {x: number; y:number}= {
  x: 10,
  y:20,
}


//Function
//(i: number) => void -> tells what arguments and what is the return type
const logNumber: (i: number) => void = (i: number) => {
  console.log(`Value of i = ${i}`)
}

//numApples = "Hello" ->throws error

