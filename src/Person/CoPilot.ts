import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class CoPilot extends Employee {

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender,
        salary: number
    ) {
        super(id, firstName, lastName, gender, salary);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.salary = salary;

    }
}