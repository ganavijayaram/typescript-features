const GHC = {
  place: 'Orlando',
  people: 30000
}

//in flexible array we use (), for tuple we are using []
const GHCConference: [String, number]= ['Orlando', 30000] //annotating it is a tuple and not array

//instead of always tpying out [String, number]
//we can create a type

type info =[String, number]
const GHCConference1: info = ['Orlando', 30000]
const GHCConference2: info = ['Orlando', 30000]
const GHCConference3: info = ['Orlando', 30000]

//tuples vs objects
//tuples just have values and Types, but they do not tell what it means
// in the above GHC object we know the values are place and people but in the tuple, we dont know what they mean