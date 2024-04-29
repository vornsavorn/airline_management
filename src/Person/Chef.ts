import { Meal } from "../Booking/Meal";
import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { Gender} from "./Gender";
import { Person } from "./Person";

export class Chef extends Person {
    private fights: Flight[] = [];
    constructor(
        id : string,
        firstName : string,
        lastName : string,
        gender: Gender
    ) {
            super(id, firstName, lastName, gender);
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
        }

        addFlight(flight: Flight): void {
            this.fights.push(flight);
        }

        getMeal(): void {
            
        }
}