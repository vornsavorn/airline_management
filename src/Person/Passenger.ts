import { Meal } from "../Booking/Meal";
import { Seat } from "../Plane/Seat";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { Gate } from "../Airport/Gate";


export class Passenger extends Person {

    private mealReferences: Meal[];
    private seatNumber: Seat[];
    private gate : Gate | undefined;

    constructor(
        private frequentFlyerNumber: string,
        private passportNumber: string, id: string, firstName: string, lastName: string, gender: Gender
    ) {
        super(id, firstName, lastName, gender);
        this.seatNumber = [];
        this.mealReferences = [];
    }
    addGate(gate: Gate){
        this.gate = gate;
    }
    

    getGate(): Gate | undefined{
        return this.gate;
    }

    getSeatNumber(): Seat[] {
        return this.seatNumber;
    }

    addSeatNumber(seatNumber: Seat): void {
        this.seatNumber.push(seatNumber);
    }

    addMealReference(mealReference: Meal): void {
        this.mealReferences.push(mealReference);
    }

    getFrequentFlyerNumber(): string {
        return this.frequentFlyerNumber;
    }

    getPassportNumber(): string {
        return this.passportNumber;
    }
}
