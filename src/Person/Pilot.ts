import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { Flight } from "../Flight/Flight";

export class AirlinePilot extends Person {
    private flights: Flight[];
    
    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender,
        private salary: number
    ) {
        super(id, firstName, lastName, gender);
        this.flights = [];
    }
    
    addFlight(flight: Flight) {
        this.flights.push(flight);
    }
    
    getFlightsForDate(date: Date): number {
        let flightsForDate = this.flights.filter(flight => {
            let departureDate = flight.getDepartureTime().toDateString();
            return departureDate === date.toDateString();
        });
        return flightsForDate.length;
    }
    
    getSalary(): number {
        return this.salary;
    }
}