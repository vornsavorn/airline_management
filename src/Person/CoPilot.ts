import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class CoPilot extends Person {

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender
    ) {
        super(id, firstName, lastName, gender);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;

    }
}