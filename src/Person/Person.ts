import { Gender } from "./Gender";

export class Person {
    constructor(
        protected id: string, 
        protected firstName: string, 
        protected lastName: string, 
        protected gender: Gender) 
        {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;

    }

    getId(): string {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getGender(): Gender {
        return this.gender;
    }
}