export interface Animal {
    name: string;
    type: string;
    sound: string;
}
export declare const animals: Animal[];
export declare function getAnimalByName(name: string): Animal | undefined;
export declare function getAnimalsByType(type: string): Animal[];
export declare function makeSound(animalName: string): string;
//# sourceMappingURL=index.d.ts.map