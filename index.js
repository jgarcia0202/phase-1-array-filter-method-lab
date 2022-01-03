// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

function fuzzyMatch(drivers,string){
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result;
}

function matchName(drivers, string){
    return drivers.filter(function(hometown){
      return hometown.name == string
    })
  
}