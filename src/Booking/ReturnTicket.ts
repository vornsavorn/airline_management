import { Airport } from "../Airport/Airport";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip";
import { Ticket } from "./Ticket";

export class ReturnTicket extends Ticket {
    setArrivalAirport(arrivalAirport: Airport) {
        throw new Error("Method not implemented.");
    }
    setDepartureAirport(departureAirport: Airport) {
        throw new Error("Method not implemented.");
    }
    private returnDate: Date;

    constructor(
        id: number,
        bookingTrips: BookingTrip[],
        departureAirports: Airport,
        arrivalAirports: Airport,
        flights: Flight[],
        passenger: Passenger[],
        returnDate: Date
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