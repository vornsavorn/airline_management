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
    private chefs: Chef | undefined;

    constructor(
        private bookingReferenceNumber: string,
        private flightNumber: string,
        private departureTime: Date,
        private arrivalTime: Date
        
    ) {
        this.bookingReferenceNumber = bookingReferenceNumber;
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

    getArrivalTime(): Date {
        return this.arrivalTime;
    }

    addPassenger(...passenger: Passenger[]): void {
        this.passengers.push(...passenger);
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

    addBaggage(...baggage: Baggage[]): void{
        this.baggage.push(...baggage);
    }

    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }
}