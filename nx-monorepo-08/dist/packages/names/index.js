"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomName = generateRandomName;
exports.formatName = formatName;
exports.getInitials = getInitials;
exports.capitalizeName = capitalizeName;
function generateRandomName() {
    const firstNames = ["Alex", "Sam", "Jordan", "Taylor", "Casey", "Morgan"];
    const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Garcia",
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
function getInitials(firstName, lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
}
function capitalizeName(name) {
    return name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
//# sourceMappingURL=index.js.map