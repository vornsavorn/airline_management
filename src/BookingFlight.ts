import { Airport } from "./Airport";
import { Meal } from "./Meal";
import { Passenger } from "./Passenger";
import { Seat } from "./Seat";

class BookingFlight {
    private departureAirport: Airport;
    private arrivalAirport: Airport;
    passengers: Passenger;
    baggage: Baggage[] = [];
    meals: Meal[] = [];
    seats: Seat[] = [];
    constructor(
        private flightNumber: number,
        private departureTime: Date,
        private arrivalTime: Date
    ) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
}

getFlightNumber(): number { 
}

getDepartureCity(): string {

}

arrivalAirport(): string {
    
}