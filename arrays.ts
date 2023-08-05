const indianChats= ['DahiPuri', 'PaniPuri', 'SevPuri'] //inference

const indianLang: String []= ['Kannada', 'Hindi', 'Malyalum'] //annoations


//if we have dont initialise array then it we need to annotate it

//2D
const cities = [
  ['Banaglore', 'Mysore'],
  ['Mumbai', 'Nashik']

]

//Inference when extracting
const city = cities[0]

//cannot push incompatiable types into array
//lots of methods associated to that type for each element in the array through autocomplete

//Flexible datatypes
//inference
const importantDates = [new Date(), '2111-11-11']
//annotation
const importantDates1: (String | Date)[]= [new Date(), '2111-11-11']