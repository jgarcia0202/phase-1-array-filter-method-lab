// Code your solution here
function findMatching(drivers, name){
    const result = drivers.filter(driversName => driversName.toLowerCase() === name.toLowerCase())
    return result
}
function fuzzyMatch(drivers, name){
    const result = drivers.filter(driversName => driversName[0] === name[0])
    return result
}
function matchName(drivers, name){
    return drivers.filter((driversName) => {
        return driversName.name === name
    })
}

/*
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
*/