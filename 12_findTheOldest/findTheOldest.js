const findTheOldest = function(people) {
let sorted = people.sort((a,b) => {
    if (a.yearOfDeath == undefined){
        a.yearOfDeath = 2022;
    }
    if (b.yearOfDeath == undefined){
        b.yearOfDeath = 2022;
    }
    return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1;
})
return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
