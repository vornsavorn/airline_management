import { Employee } from "./Employee";

export class EmployeeSalary{
    private employee : Employee[];
    constructor(private id : string,private amount : number){
        this.id = id;
        this.amount = amount;
    }

}