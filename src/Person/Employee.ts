import { Gender } from "./Gender";
import { Person } from "./Person";

export class Employee extends Person{
    constructor(
        id: string, 
        firstName: string, 
        lastName: string,  
        gender: Gender, 
        private salary: number
    ) {
        super(id, firstName, lastName, gender)
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

}