import { Animal } from "../animals";
export interface ZooKeeper {
    name: string;
    assignedAnimals: Animal[];
}
export declare class Zoo {
    private animals;
    private keepers;
    addAnimal(animal: Animal): void;
    addKeeper(name: string): void;
    assignAnimalToKeeper(animalName: string, keeperName: string): void;
    showZooInfo(): void;
    makeAllAnimalsSound(): void;
}
//# sourceMappingURL=index.d.ts.map