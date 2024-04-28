import { Flight } from "./Flight";
import { BookingTrip } from "./BookingTrip";
import { BookingFlight } from "./BookingFlight";
import { Airport } from "./Airport";
import { Passenger } from "./Passenger";

export class ReturnTicket {
    
    constructor (private id : number, private bookingTrip: BookingTrip[],private BookingFlight : BookingFlight[],
        private flight: Flight[], private departureAirport: Airport[], private arrivalAirport: Airport[], private passenger: Passenger[]) {
            this.id = id;
            this.bookingTrip = [];
            this.BookingFlight = [];
            this.flight = flight;
            this.departureAirport = [];
            this.arrivalAirport = [];
            this.passenger = [];
    }
}
