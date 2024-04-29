import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class AirlinePilot extends Person {
    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender,
        private salary: number
    ) {
        super(id, firstName, lastName, gender);
    }
    getId(): string { 
        return this.id; 
    }
    
    getSalary(): number {
        return this.salary;
    }
}