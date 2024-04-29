import { Meal } from "../Booking/Meal";
import { Seat } from "../Plane/Seat";
import { Gender } from "./Gender";
import { Person } from "./Person";


export class Passenger extends Person {

    private mealReferences: Meal[];
    private seatNames: Seat[];

    constructor(
        private frequentFlyerNumber: string,
        private passportNumber: string, id: string, firstName: string, lastName: string, gender: Gender
    ) {
        super(id, firstName, lastName, gender);
        this.seatNames = [];
        this.mealReferences = [];
    }

    getSeatNames(): Seat[] {
        return this.seatNames;
    }

    addSeatName(seatName: Seat): void {
        this.seatNames.push(seatName);
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
