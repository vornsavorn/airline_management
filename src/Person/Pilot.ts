import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { Flight } from "../Flight/Flight";

export class AirlinePilot extends Employee {
    private flights: Flight[];

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender,
        salary: number
    ) {
        super(id, firstName, lastName, gender, salary);
        this.flights = [];
    }

    addFlight(flight: Flight) {
        this.flights.push(flight);
    }

    getFlightsForDate(date: Date): string[] {
        let flightsForDate: string[] = [];

        for (let flight of this.flights) {
            let departureDate = flight.getDepartureTime().toDateString();
            if (departureDate === date.toDateString()) {
                flightsForDate.push(`Flight ${ flight.getFlightName() }`);
            }
        };

        return flightsForDate;
    }

}