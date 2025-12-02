import { Animal, getAnimalByName, makeSound } from "../animals";
import { generateRandomName, formatName } from "../names";

export interface ZooKeeper {
  name: string;
  assignedAnimals: Animal[];
}

export class Zoo {
  private animals: Animal[] = [];
  private keepers: ZooKeeper[] = [];

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the zoo!`);
  }

  addKeeper(name: string): void {
    const keeper: ZooKeeper = {
      name,
      assignedAnimals: [],
    };
    this.keepers.push(keeper);
    console.log(`Hired ${name} as a zookeeper!`);
  }

  assignAnimalToKeeper(animalName: string, keeperName: string): void {
    const animal = getAnimalByName(animalName);
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

  showZooInfo(): void {
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

  makeAllAnimalsSound(): void {
    console.log("\n=== Animal Sounds ===");
    this.animals.forEach((animal) => {
      console.log(makeSound(animal.name));
    });
  }
}

// Example usage
if (require.main === module) {
  const myZoo = new Zoo();

  myZoo.addAnimal({ name: "Lion", type: "mammal", sound: "roar" });
  myZoo.addAnimal({ name: "Elephant", type: "mammal", sound: "trumpet" });

  const keeperName = generateRandomName();
  myZoo.addKeeper(keeperName);

  myZoo.assignAnimalToKeeper("Lion", keeperName);
  myZoo.assignAnimalToKeeper("Elephant", keeperName);

  myZoo.showZooInfo();
  myZoo.makeAllAnimalsSound();
}
