import { Employee } from "../Person/Employee";

export class Airline {
  private employees: Employee[] = [];
  
  constructor(private name: string) {
    this.name = name;
  }
  
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
  
  getName() {
    return this.name;
  }
  
  getSalary(): number {
    let totalSalary = 0;
    for (let employee of this.employees) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }
}