

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() : string {
    return `name is ${this.name}`
  }
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`)
}

printVehicle(oldCivic)

//2 problems with the above approach
//1. type annotation is too long
//2. if we delcare another fucntion which will take oldcivis as a =n argument, we need to keep 
//writing the same code again and again

interface Vehicle {
  name: String,
  year: number,
  broken: boolean
  summary(): string
}

//type: Tuple:: interface: Object

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
}

printVehicle1(oldCivic)

//interface will tell what must have values are, in the oldcivic we need to have all the properties which are in the
//interface but can also ahve additional this is java

interface Report {
  summary(): string
}

const printSummary = (vehicle: Report): void => {
  console.log(`Name: ${vehicle.summary()}`)
}

const oldCivic1 = {
  summary() : string {
    return `name is ${this.name}`
  }
}


printSummary(oldCivic1)



//interfaces are reuseable
const GHCConferences = {
  place: 'Orlando',
  people: 30000,
  summary(): string {
    return `PLace in GHC ${this.place}`
  }
}

// we can use print sumamry function for both objects have summary from report
printSummary(GHCConferences)