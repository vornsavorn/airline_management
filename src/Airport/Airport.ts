import {Employee} from '../Person/Employee';
import {CrewMember} from '../Person/CrewMember';
import {Gate} from './Gate';
import { Route } from './Route';
import { Flight } from '../Flight/Flight';
import { Passenger } from '../Person/Passenger';


export class Airport {
    private employees: Employee[] = [];
    private crewMember: CrewMember[] = [];
    private gates: Gate[] = [];
    private Route: Route[] = [];
    private flights:Flight[] = [];
    private passengers:Passenger[] = [];
    constructor (
        private code: string,
        private name: string 
    ) {
        this.code = code;
        this.name = name;
    }  

    getCode(): string {
        return this.code;
    }
    getName(): string {
        return this.name;
    }

    addPassenger(passenger:Passenger): void {
        this.passengers.push(passenger);
    }

    addFlight(flight:Flight): void{
        this.flights.push(flight);
    }

    addRoutes(routes:Route): void {
        this.Route.push(routes);
    }
   

}