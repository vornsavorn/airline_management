import { AirlinePilot } from "../Person/Pilot";
import { Route } from "../Airport/Route";
import { Ticket } from "../Booking/Ticket";
import { BookingFlight } from "../Booking/BookingFlight";
import { Gate } from "../Airport/Gate";

export class Flight {
    getFlightNumber() {
        throw new Error("Method not implemented.");
    }
    private bookingFlight: BookingFlight[] = [];
    private routes: Route;
    private gates: Gate[] = [];
    private polit: AirlinePilot;
    private tickets: Ticket[] = [];
    constructor (
        private flightId: string,
        private flightName: string,
        private price: number,
        private departureTime: Date,
        private arrivalTime: Date  
    ) {
        this.flightId = flightId;
        this.flightName = flightName;
        this.price = price;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
    
}