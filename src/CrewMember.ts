import { Employee } from "./Employee";

export class CrewMember extends Employee {
    constructor(protected id : string,protected name: string, 
    protected age: number, protected role: string[],protected salary: number){
        super(id,name,age,role,salary);
        this.id = id;
        this.name = name;
        this.role = role;
        this.age = age;
        this.salary = salary;
    }
    getId():string{
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