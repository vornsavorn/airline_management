import { Airport } from "./Airport";
import { BookingTrip } from "./BookingTrip";
import { Flight } from "./Flight";
import { Passenger } from "./Passenger";

export class Ticket {
    private bookingTrips: BookingTrip[] = [];
    private flights: Flight[] = [];
    private departureAirports: Airport | undefined;
    private arrivalAirports: Airport | undefined;
    private passenger: Passenger[];

    constructor(private id: number) {
        this.id = id;
        this.bookingTrips = [];
        this.flights = [];
        this.arrivalAirports = [];
        this.departureAirports = [];
        this.passenger = [];
    }

    addBookingTrip(bookingTrip: BookingTrip): void {
        this.bookingTrips.push(bookingTrip);
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    setDepartureAirport(departureAirport: Airport): void {
        this.departureAirports = departureAirport;
    }

    setArrivalAirport(arrivalAirport: Airport): void {
        this.arrivalAirports = arrivalAirport
    }
}