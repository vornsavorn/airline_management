import { Flight } from "./Flight";
import { Passenger } from "./Passenger";

export class Baggage {
    private flights: Flight[];
    private passenger: Passenger;
    constructor (
        private tagNumber: string,
        private weight: number
    ) {
        this.tagNumber = tagNumber;
        this.weight = weight;
        this.flights = [];
    }
    addFlight(flight: Flight) {
        this.flights.push(flight);
    }
    getFlights(): Flight[] {
        return this.flights;
    }
    getPassenger(): Passenger {
        return this.passenger;
    }
    setPassenger(passenger: Passenger) {
        this.passenger = passenger;
    }
    getTagNumber(): string {
        return this.tagNumber;
    }
    getWeight(): number {
        return this.weight;
    }
    
}