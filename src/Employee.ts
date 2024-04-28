export class Employee {
    constructor(private id: string, private name: string, private age: number, private role: string[], private salary: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
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