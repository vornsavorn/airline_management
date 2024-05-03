import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";

export class Baggage {
    private flights: Flight[];
    constructor (
        private tagNumber: string,
        private weight: number,
        private passengers: Passenger 
    ) {
        this.flights = [];
    }
    
    addFlight(flight: Flight) {
        this.flights.push(flight);
    }
    setFlight(flight: Flight[]) {
        this.flights = flight;
    }
    getFlight(): Flight[] {
        return this.flights;
    }
    getPassenger(): Passenger {
        return this.passengers;
    }
    
}