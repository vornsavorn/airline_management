import { AirlinePilot } from "./Pilot";
import { Route } from "./Route";
import { Ticket } from "./Ticket";

export class Flight {
    private routes: Route[] = [];
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

    getFlightName(): string {
        return this.flightName;
    }

    getDate(): Date {
        return this.departureTime;
    }

    getFlightId(): string {
        return this.flightId;
    }

    addRoute(route: Route) {
        this.routes.push(route);
    }

    getRoutes(): Route[] {
        return this.routes;
    }

    getPilot(): AirlinePilot {
        return this.polit;
    }

    setPilot(pilot: AirlinePilot) {
        this.polit = pilot;
    }

    getPrice(): number {
        return this.price;
    }
    getDepartureTime(): Date {
        return this.departureTime;
    }
    getArrivalTime(): Date {
        return this.arrivalTime;
    }
    getDuration(): number {
        return this.arrivalTime.getTime() - this.departureTime.getTime();
    }
    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }
    getTickets(): Ticket[] {
        return this.tickets;
    }
    
}