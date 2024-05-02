import { Baggage } from "./Baggage";
import { Meal } from "./Meal";
import { Passenger } from "../Person/Passenger";
import { Airport } from "../Airport/Airport";
import { Seat } from "../Plane/Seat";
import { Chef } from "../Person/Chef";

export class BookingFlight {
    private departureAirport: Airport | undefined;
    private arrivalAirport: Airport | undefined;
    private passengers: Passenger[] = [];
    private baggage: Baggage[] = [];
    private meals: Meal[] = [];
    private seats: Seat[] = [];
    private chefs: Chef | undefined;

    constructor(
        private flightNumber: string,
        private departureTime: Date,
        private arrivalTime: Date
    ) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

    getFlightNumber(): string {
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

    getDepartureAirport(): Airport | undefined {
        return this.departureAirport;
    }

    setDepartureAirport(departureAirport: Airport): void {
        this.departureAirport = departureAirport;
    }

    getArrivalAirport(): Airport | undefined {
        return this.arrivalAirport;
    }

    setArrivalAirport(arrivalAirport: Airport): void {
        this.arrivalAirport = arrivalAirport;
    }

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    getPassengers(): Passenger[] {
        return this.passengers;
    }

    setAMealFromBookingFlight(meal: Meal): void {
        this.meals.push(meal);
    }

    getMealsFromBookingFlight(): Meal[] {
        return this.meals;
    }
}