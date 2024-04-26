import { Airport } from "./Airport";
import { Baggage } from "./Baggage";
import { Meal } from "./Meal";
import { Passenger } from "./Passenger";
import { Seat } from "./Seat";

class BookingFlight {
    private departureAirport: Airport;
    private arrivalAirport: Airport;
    private passengers: Passenger[] = [];
    private baggage: Baggage[] = [];
    private meals: Meal[] = [];
    private seats: Seat[] = [];
    constructor(
        private flightNumber: number,
        private departureTime: Date,
        private arrivalTime: Date
    ) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
    
    getFlightNumber(): number {
        return this.flightNumber;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    setDepartureTime(departureTime: Date): void {
        this.departureTime = departureTime;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    setArrivalTime(arrivalTime: Date): void {
        this.arrivalTime = arrivalTime;
    }

    getDepartureAirport(): Airport {
        return this.departureAirport;
    }

    setDepartureAirport(departureAirport: Airport): void {
        this.departureAirport = departureAirport;
    }

    getArrivalAirport(): Airport {
        return this.arrivalAirport;
    }

    setArrivalAirport(arrivalAirport: Airport): void {
        this.arrivalAirport = arrivalAirport;
    }

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    removePassenger(passenger: Passenger): void {
        this.passengers.splice(this.passengers.indexOf(passenger), 1);
    }
}
