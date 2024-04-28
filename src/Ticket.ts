import { Airport } from "./Airport";
import { BookingTrip } from "./BookingTrip";
import { Flight } from "./Flight";
import { Passenger } from "./Passenger";

export class Ticket  {
    protected bookingTrips: BookingTrip[];
    protected flights: Flight[];
    protected departureAirports: Airport | undefined;
    protected arrivalAirports: Airport | undefined;
    protected passenger: Passenger[];

    constructor(protected id: number) {
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