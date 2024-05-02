import { BookingFlight } from "../Booking/BookingFlight";
import { ReturnTicket } from "../Booking/ReturnTicket";
import { Employee } from "../Person/Employee";

export class Airline {
    private employees: Employee[] = [];
    private bookingFlights: BookingFlight[] = [];

    constructor(private name: string,) {
        this.name = name;

    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }
    getEmployeeCount(): number {
        return this.employees.length;
    }

    getName() {
        return this.name;
    }

    getSalary(): number {
        let totalSalary = 0;
        for (let employee of this.employees) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    getBookingFlight(): BookingFlight[] {
        return this.bookingFlights
    }

    getPassengersReturnTickets(flightNumber: string): number {
        let passengerReturn = 0;

        for (let bookingFlight of this.bookingFlights) {
            if (bookingFlight.getFlightNumber() === flightNumber) {
                let passengers = bookingFlight.getPassengers();
                for (let passenger of passengers) {
                    if (passenger.getReturnTicket() === ReturnTicket.RETURN) {
                        passengerReturn++;
                        // console.log(passengerReturn);
                    }
                }
            }
        }

        return passengerReturn;
    }
}