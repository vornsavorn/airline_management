import { AirlinePilot } from "../Person/Pilot";
import { Route } from "../Airport/Route";
import { Ticket } from "../Booking/Ticket";
import { BookingFlight } from "../Booking/BookingFlight";
import { Gate } from "../Airport/Gate";

export class Flight {
    private bookingFlights: BookingFlight[] = [];
    private routes: Route | undefined;
    private gates: Gate[] = [];
    private pilot: AirlinePilot | undefined;
    private tickets: Ticket[] = [];

    constructor(
        private flightId: string,
        private flightName: string,
        private price: number,
        private departureTime: Date,
        private arrivalTime: Date
    ) {}

    getFlightId(): string {
        return this.flightId;
    }

    getFlightName(): string {
        return this.flightName;
    }

    getDepartureTime(): Date {
        return this.departureTime;
    }

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    getBookingFlights(): BookingFlight[] {
        return this.bookingFlights;
    }

    addBookingFlight(bookingFlight: BookingFlight): void {
        this.bookingFlights.push(bookingFlight);
    }

    getRoutes(): Route | undefined {
        return this.routes;
    }

    setRoutes(routes: Route): void {
        this.routes = routes;
    }

    getGates(): Gate[] {
        return this.gates;
    }

    setGates(gates: Gate[]): void {
        this.gates = gates;
    }

    getPilot(): AirlinePilot | undefined {
        return this.pilot;
    }

    setPilot(pilot: AirlinePilot): void {
        this.pilot = pilot;
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }

    addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    getFlightFullName(): string {
        return `${this.flightId} and ${this.flightName}`;
    }
}