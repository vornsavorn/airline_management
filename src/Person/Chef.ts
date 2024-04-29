import { Meal } from "../Booking/Meal";
import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { Gender} from "./Gender";

export class Chef extends Employee {
    private fights: Flight[] = [];
    private gender: Gender;
    constructor(
        protected id : string,
        protected name: string, 
        protected age: number, 
        protected role: string[],
        protected salary: number
    ) {
            super(id,name,age,role,salary);
            this.id = id;
            this.name = name;
            this.role = role;
            this.age = age;
            this.salary = salary;
        }

        addFlight(flight: Flight): void {
            this.fights.push(flight);
        }

        getMeal(): void {
            
        }
}