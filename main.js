import { Person } from './modules/Person.js';
import { Worker } from './modules/Worker.js';

const personObject = new Person('Bob', 34, 1.78);
personObject.introduceYourself();

const workerObject = new Worker('André', 23, 1.68, 'Desenvolvedor Fullstack');
workerObject.introduceYourself();