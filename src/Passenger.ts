import { Meal } from "./Meal";
import { Seat } from "./Seat";

export class Passenger {
    private mealReferences: Meal[];
    private seatNames: Seat[];

    constructor(
        private name: string,
        private frequentFlyerNumber: string,
        private passportNumber: string
    ) {
        this.seatNames = [];
        this.mealReferences = [];
    }

    getName(): string {
        return this.name;
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