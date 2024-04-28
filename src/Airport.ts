import { CrewMember } from "./CrewMember";
import { Employee } from "./Employee";

export class Airport {
    private employees: Employee[] = [];
    private crewMember: CrewMember[] = []; 
    constructor (
        private code: string,
        private name: string 
    ) {
        this.code = code;
        this.name = name;
    }  

    getCode(): string {
        return this.code;
    }
    getName(): string {
        return this.name;
    }
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    addCrewMember(crewMember: CrewMember): void {
        this.crewMember.push(crewMember);
    }
    getEmployees(): Employee[] {
        return this.employees;
    }
    getCrewMember(): CrewMember[] {
        return this.crewMember;
    }
    getNumberOfEmployees(): number {
        return this.employees.length;
    }
    getNumberOfCrewMembers(): number {
        return this.crewMember.length;
    }
    getNumberOfEmployeesAndCrewMembers(): number {
        return this.employees.length + this.crewMember.length;
    }
   

}