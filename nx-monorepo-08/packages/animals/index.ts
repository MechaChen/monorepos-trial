export interface Animal {
  name: string;
  type: string;
  sound: string;
}

export const animals: Animal[] = [
  { name: "Lion", type: "mammal", sound: "roar" },
  { name: "Elephant", type: "mammal", sound: "trumpet" },
  { name: "Eagle", type: "bird", sound: "screech" },
  { name: "Snake", type: "reptile", sound: "hiss" },
];

export function getAnimalByName(name: string): Animal | undefined {
  return animals.find(
    (animal) => animal.name.toLowerCase() === name.toLowerCase()
  );
}

export function getAnimalsByType(type: string): Animal[] {
  return animals.filter((animal) => animal.type === type);
}

export function makeSound(animalName: string): string {
  const animal = getAnimalByName(animalName);
  return animal ? `${animal.name} says ${animal.sound}!` : "Animal not found";
}
