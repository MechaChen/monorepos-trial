"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animals = void 0;
exports.getAnimalByName = getAnimalByName;
exports.getAnimalsByType = getAnimalsByType;
exports.makeSound = makeSound;
exports.animals = [
    { name: "Lion", type: "mammal", sound: "roar" },
    { name: "Elephant", type: "mammal", sound: "trumpet" },
    { name: "Eagle", type: "bird", sound: "screech" },
    { name: "Snake", type: "reptile", sound: "hiss" },
];
function getAnimalByName(name) {
    return exports.animals.find((animal) => animal.name.toLowerCase() === name.toLowerCase());
}
function getAnimalsByType(type) {
    return exports.animals.filter((animal) => animal.type === type);
}
function makeSound(animalName) {
    const animal = getAnimalByName(animalName);
    return animal ? `${animal.name} says ${animal.sound}!` : "Animal not found";
}
//# sourceMappingURL=index.js.map