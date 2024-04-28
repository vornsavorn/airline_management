import { Employee } from "./Employee";

export class AirlinePilot extends Employee {
    constructor(
        id: string,
        name: string,
        age: number,
        role: string[],
        salary: number
    ) {
        super(id, name, age, role, salary);
    }
    getId(): string { 
        return this.id; 
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getRole(): string[] {
        return this.role;
    }
    getSalary(): number {
        return this.salary;
    }
}