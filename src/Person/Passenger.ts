import { Meal } from "../Booking/Meal";
import { Seat } from "../Plane/Seat";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { Gate } from "../Airport/Gate";
import { ReturnTicket } from "../Booking/ReturnTicket";
import { BookingFlight } from "../Booking/BookingFlight";


export class Passenger extends Person {

    private mealReferences: Meal[];
    private seatNumbers: Seat[];
    private gate: Gate | undefined;
    private returnTicket: ReturnTicket
    private bookingflights: BookingFlight[];

    constructor(
        private frequentFlyerNumber: string,
        private passportNumber: string, 
        private hasReturnTicket: ReturnTicket,
        id: string, firstName: string, lastName: string, gender: Gender
    ) {
        super(id, firstName, lastName, gender);
        this.seatNumbers = [];
        this.mealReferences = [];
        this.returnTicket = hasReturnTicket;
        this.bookingflights = [];
    }

    addGate(gate: Gate) {
        this.gate = gate;
    }

    haveReturnTicket(): ReturnTicket {
        return this.returnTicket;
    }

    getGate(): Gate | undefined {
        return this.gate;
    }
    addSeat(seatNumber: Seat): void {
        this.seatNumbers.push(seatNumber);
    }
    

    addSeatNumber(seatNumber: Seat): void {
        this.seatNumbers.push(seatNumber);
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

    getReturnTicket(): ReturnTicket {
        return this.returnTicket;
    }

    getBookingFlights(): BookingFlight[] {
        return this.bookingflights;
    }

    getBookingReferenceNumber(): string | undefined {
        if (this.bookingflights && this.bookingflights.length > 0) {
            return this.bookingflights[0].getBookingReferenceNumber();
        } else {
            return undefined;
        }
    }
    
}
