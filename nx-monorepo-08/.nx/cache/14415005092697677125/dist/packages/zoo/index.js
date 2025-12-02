"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
const animals_1 = require("../animals");
const names_1 = require("../names");
class Zoo {
    constructor() {
        this.animals = [];
        this.keepers = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
        console.log(`Added ${animal.name} to the zoo!`);
    }
    addKeeper(name) {
        const keeper = {
            name,
            assignedAnimals: [],
        };
        this.keepers.push(keeper);
        console.log(`Hired ${name} as a zookeeper!`);
    }
    assignAnimalToKeeper(animalName, keeperName) {
        const animal = (0, animals_1.getAnimalByName)(animalName);
        const keeper = this.keepers.find((k) => k.name === keeperName);
        if (!animal) {
            console.log(`Animal ${animalName} not found!`);
            return;
        }
        if (!keeper) {
            console.log(`Keeper ${keeperName} not found!`);
            return;
        }
        keeper.assignedAnimals.push(animal);
        console.log(`Assigned ${animal.name} to ${keeper.name}`);
    }
    showZooInfo() {
        console.log("\n=== Zoo Information ===");
        console.log(`Total Animals: ${this.animals.length}`);
        console.log(`Total Keepers: ${this.keepers.length}`);
        this.keepers.forEach((keeper) => {
            console.log(`\n${keeper.name} takes care of:`);
            keeper.assignedAnimals.forEach((animal) => {
                console.log(`  - ${animal.name} (${animal.type})`);
            });
        });
    }
    makeAllAnimalsSound() {
        console.log("\n=== Animal Sounds ===");
        this.animals.forEach((animal) => {
            console.log((0, animals_1.makeSound)(animal.name));
        });
    }
}
exports.Zoo = Zoo;
// Example usage
if (require.main === module) {
    const myZoo = new Zoo();
    myZoo.addAnimal({ name: "Lion", type: "mammal", sound: "roar" });
    myZoo.addAnimal({ name: "Elephant", type: "mammal", sound: "trumpet" });
    const keeperName = (0, names_1.generateRandomName)();
    myZoo.addKeeper(keeperName);
    myZoo.assignAnimalToKeeper("Lion", keeperName);
    myZoo.assignAnimalToKeeper("Elephant", keeperName);
    myZoo.showZooInfo();
    myZoo.makeAllAnimalsSound();
}
//# sourceMappingURL=index.js.map