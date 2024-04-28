import { Ticket } from "./Ticket";
import { Passenger } from "./Passenger";
import { Flight } from "./Flight";
import { BookingTrip } from "./BookingTrip";
import { Airport } from "./Airport";

export class ReturnTicket extends Ticket {
   
    constructor(
        id: number,
        bookingTrips: BookingTrip[],
        departureAirports: Airport,
        arrivalAirports: Airport,
        flights: Flight[],
        passenger: Passenger,
        private returnDate: Date
    ) {
        super(
            id,
            bookingTrips,
            departureAirports,
            arrivalAirports,
            flights,
            passenger
        );
        this.returnDate = returnDate;
    }

    getReturnDate(): Date {
        return this.returnDate;
    }

    setReturnDate(returnDate: Date): void {
        this.returnDate = returnDate;
    }
}


