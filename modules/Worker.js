import { Person } from "./Person.js";

export class Worker extends Person {
    constructor(name, age, height, profession) {
        super(name, age, height);
        this.profession = profession;
    }

    introduceYourself() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura e sou ${this.profession}.`);
    }
}