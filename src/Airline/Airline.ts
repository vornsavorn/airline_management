import { Employee } from "../Person/Employee";


export class Airline {
   private employee: Employee[] = [];
   constructor(private name: string) {
    this.name = name;
   }
}

