
//annotatio for function
//there is no inference for argumnets
const add = (a:number, b:number): number => {
  //return "aaa" => will throw error
  //TS will not take care of logic but only the type of what is returned
  return a+b

}


//inference for function
//there is  inference for return
const sub = (a:number, b:number) => {
  //return "aaa" => will throw error
  //TS will not take care of logic but only the type of what is returned
  return a+-b
}

function divide(a: number, b:number): number { 
  return a/b
}

//anonymous function
const mul = function(a:number, b:number): number {
  return a*b
}

// when function does not return anything
const logger = (message: string): void => {
  console.log(message)
}

//Never going to reach the end of the function and will never return anything
const throwError = (): never => {
  throw new Error("Error")
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(`${forecast.date} ${forecast.weather}`)
}

///destructuing without variable
const logWeather1 = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(`${date} ${weather}`)
}

logWeather(todaysWeather)
 