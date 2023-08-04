//type annotations can be used with every type - primitive and objects

//telling  TS the type of value to expect
//primitive
let numApples: number = 5
//numApples = "Hello" ->throws error
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
// the above is annotations
const logNumber: (i: number) => void = (i: number) => {
  console.log(`Value of i = ${i}`)
}

logNumber(10)


//when to use annotations
//1. Functions returning any
const obj = '{"x":10, "y":20}'
//JSON.parse is a function which return any-> which means it can return any type thats why coordinates is any
const coordinates = JSON.parse(obj)
//coordinates.asbjasbdjsb -> will not throw error because it is of type any

//fix 1
const coordinates1: {x:number; y:number} = JSON.parse(obj)
//coordinates.asbjasbdjsb -> will throw error because it has a type

//2. when declaration and initialisation are on different lines
let words = ['dog', 'beige']
//Here
let found: boolean

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'Ganavi') {
    found = true
  }
}

//variable whose type cannot be inferred
let numbers = [1, 2, -2]
let numFound: boolean | number = false
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numFound = numbers[i]
  }
}
