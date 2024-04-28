import { Flight } from "./Flight";

export class Pilot {
    constructor(private id: string, private name: string, private role: string, private age: number, private salary: number, private flights: Flight[]){
        this.id = id;
        this.name = name;
        this.role = role;
        this.age = age;
        this.salary = salary;
        this.flights = [];
    }
   
}