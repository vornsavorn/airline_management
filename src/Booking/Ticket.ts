import { Airport } from "../Airport/Airport";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip";

export class Ticket {
    protected id: number;
    protected bookingTrips: BookingTrip[];
    protected departureAirports: Airport;
    protected arrivalAirports: Airport;
    protected flights: Flight[];
    protected passengers: Passenger[];

    constructor(
        id: number,
        bookingTrips: BookingTrip[],
        departureAirports: Airport,
        arrivalAirports: Airport,
        flights: Flight[],
        passenger: Passenger[]
    ) {
        this.id = id;
        this.bookingTrips = bookingTrips;
        this.departureAirports = departureAirports;
        this.arrivalAirports = arrivalAirports;
        this.flights = flights;
        this.passengers = passenger;
    }

    getId(): number {
        return this.id;
    }

    addBookingTrips(BookingTrip: BookingTrip): void {
        this.bookingTrips.push(BookingTrip);
    }

    getDepartureAirports(): Airport {
        return this.departureAirports;
    }

    getArrivalAirports(): Airport {
        return this.arrivalAirports;
    }

    addFlights(flight: Flight): void {
        this.flights.push(flight);
    }

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }
}