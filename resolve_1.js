function dePeople(people) {
    return people.filter( person=> person.age > 18);
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

const adults = dePeople(people);
console.log(adults); 
