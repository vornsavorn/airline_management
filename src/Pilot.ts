import { Flight } from "./Flight";

export class AirlinePilot {
    constructor(
        private id: number,
        private name: string,
        private flights: Flight[]
    ){
        this.id = id;
        this.name = name;
        this.role = role;
        this.age = age;
        this.salary = salary;
        this.flights = [];
    }
   
}