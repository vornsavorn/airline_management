import { Employee } from "./Employee";

export class AirlineManager extends Employee {
    constructor(id: string, name: string, age: number, role: string[], salary: number, private department: string) {
        super(id, name, age, role, salary);
        this.department = department;
    }

    getDepartment(): string {
        return this.department;
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

