const findTheOldest = function (people) {
    let index = 0;
    let age = 0;
    people.forEach((element, currentIndex) => {
        let currentAge;
        if (Object.hasOwn(element, "yearOfDeath")) {
            currentAge = element.yearOfDeath - element.yearOfBirth;
        } else {
            let time = new Date();
            currentAge = time.getFullYear() - element.yearOfBirth;
        }
        if (currentAge >= age) {
            age = currentAge;
            index = currentIndex;
        }
    });
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
