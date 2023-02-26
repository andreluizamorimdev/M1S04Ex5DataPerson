export class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introduceYourself() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura.`);
    }

}