import { Airline } from "./Airline/Airline";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate";
import { Route } from "./Airport/Route";
import { BookingFlight } from "./Booking/BookingFlight";
import { Meal, MealType } from "./Booking/Meal";
import { Flight } from "./Flight/Flight";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger";
import { AirlinePilot } from "./Person/Pilot";



// User story 3
// As an airline pilot, I want to know, for a given date, how many flights I have to join.
let pilot = new AirlinePilot("PF1", "John", "Doe", Gender.MALE, 5000);


let flight1 = new Flight("ABC123", "Flight 1", 100, new Date('2024-04-30'), new Date('2024-04-30'));
let flight2 = new Flight("DEF456", "Flight 2", 200, new Date('2024-04-30'), new Date('2024-04-30'));
let flight3 = new Flight("GHI789", "Flight 3", 150, new Date('2024-05-01'), new Date('2024-05-01'));
pilot.addFlight(flight1);
pilot.addFlight(flight2);
pilot.addFlight(flight3);

let givenDate = new Date('2024-04-30');

// Output
let numberOfFlights = pilot.getFlightsForDate(givenDate);
// console.log(`On ${givenDate.toDateString()}, you have ${numberOfFlights} flights to join.`);


// User story 5
// As an airline manager, I want to find out how much salary I pay all my employees. |||
let airline = new Airline("C8 Airline");

let employee1 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee2 = new Employee("EY2", "Savorn", "Vorn", Gender.FEMALE, 6000);
let employee3 = new Employee("EY3", "Thary", "Oeun", Gender.FEMALE, 5500);
let employee4 = new Employee("EY4", "Layhour", "Met", Gender.MALE, 7000);

airline.addEmployee(employee1);
airline.addEmployee(employee2);
airline.addEmployee(employee3);
airline.addEmployee(employee4);

// Output
let totalSalary = airline.getSalary();
// console.log(`The total salary paid to all employees of ${airline.getName()} is: $${totalSalary}`);

