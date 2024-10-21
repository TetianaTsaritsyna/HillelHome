var pets = {
    type : 'dog',
    name: 'Jack',
    age: 1
}

function getInfo(object) {
    console.log("Pet is:");
    console.log(pets);
}
getInfo(pets);
pets.breed = "bulldog";

getInfo(pets);