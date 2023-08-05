const dogs = {
  name: 'Puttu',
  age: 2,
  bmi: {
    height: 10,
    weight: 20
  },
  //function being defined inside the object
   setAge(age: number): void {
    this.age = age
   }
}

//destructing 
//const {age}  = dogs we are getting the age out of dogs
//const {age1}: {age: number}  = dogs. -> age1 and age has to be same
//here the second part tell we are going to take age from the dogs and put it back into age
const {age, name}: {age: number, name: string}  = dogs

//the second part is describing the bmi
const {bmi: {height, weight}} : {bmi: {height: number, weight: number}}= dogs