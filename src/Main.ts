import { Airline } from "./Airline/Airline";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate";
import { Route } from "./Airport/Route";
import { BookingFlight } from "./Booking/BookingFlight";
import { Meal } from "./Booking/Meal";
import { MealType } from "./Booking/MealType";
import { Ticket } from "./Booking/Ticket";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger";
import { AirlinePilot } from "./Person/Pilot";
import { BookingTrip } from "./Booking/BookingTrip";
import { ReturnTicket } from "./Booking/ReturnTicket";
import { Baggage } from "./Booking/Baggage";
import { Seat } from "./Plane/Seat";


// User story 1  
// As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, custseat1: Seatomer information…)

let airport1 = new Airport("JFK", "Manchester Airport");
let airport2 = new Airport("JFK", "Camboida Airport");

let passenger101 = new Passenger("FF123", "AB123456", ReturnTicket.RETURN, "P001", "John", "Doe", Gender.FEMALE);
let baggage = new Baggage("B001", 20, passenger101);
let meal = new Meal(MealType.SNACK, 1, 20);
let bookingFlight1 = new BookingFlight("BKR103", "FL80", new Date(), new Date());

let flight201 = new BookingFlight("BKR101", "ABC123", new Date(), new Date());
let flight202 = new BookingFlight("BKR102", "DEF456", new Date(), new Date());
let route = new Route(new Date("2024-04-29"), new Date('2024-04-30'), airport1, airport2, "2 hours");

let seat1 = new Seat("F001", true, false);
let seat2 = new Seat("F002", true, true);

let bookingTrip = new BookingTrip();

bookingFlight1.setAMealFromBookingFlight(meal);
bookingFlight1.addBaggage(baggage);
airport2.addBooking(bookingFlight1);

seat1.bookSeat(flight201);
seat2.bookSeat(flight202);
seat1.cancelBooking();

passenger101.addSeat(seat1);

bookingFlight1.addPassenger(passenger101);
bookingTrip.addBookingFlight(bookingFlight1);
airport2.addBooking(bookingFlight1);

// Displaying information
console.log("Baggage Passenger:", baggage.getPassenger());
console.log("Passenger 101:", passenger101);
console.log("Booking Trip:", bookingTrip);
console.log("Booking Flight 1:", bookingFlight1);

// Displaying route information
console.log("Origin:", route.getOriginAirport().getName());
console.log("Destination:", route.getDestinationAirport().getName());
console.log("Duration:", route.getDuration());



// User story create 2
// As an airline manager, I want to know for a given flight, how many passengers have return Ticket.
let bookingTrip1 = new BookingTrip();

let flight101 = new BookingFlight("BKR104", 'ABC123', new Date(), new Date());
let passenger001 = new Passenger("012", "A-passport", ReturnTicket.NOT_RETURN, "A01", "hor", "lay", Gender.FEMALE);
let passenger002 = new Passenger("010", "B-passport", ReturnTicket.RETURN, "F104", "Both", "Yan", Gender.FEMALE);
flight101.addPassenger(passenger002);

bookingTrip1.addBookingFlight(flight101);

let flightNumber = 'ABC123';
let passengersReturnTicketsCount = bookingTrip1.getPassengersReturnTickets(flightNumber);
// Output
// console.log(`Number of passengers with return tickets for flight ${flightNumber}: ${passengersReturnTicketsCount}`);


// User story 3
// As an airline pilot, I want to know, for a given date, how many flights I have to join.
let pilot = new AirlinePilot("PF1", "John", "Doe", Gender.MALE, 5000);


let flight1 = new Flight("ABC123", "Fl001", 100, new Date('2024-04-30'), new Date('2024-04-30'));
let flight2 = new Flight("DEF456", "FL002", 200, new Date('2024-04-30'), new Date('2024-04-30'));
let flight3 = new Flight("GHI789", "FL003", 150, new Date('2024-05-01'), new Date('2024-05-01'));

pilot.addFlight(flight1);
pilot.addFlight(flight2);
pilot.addFlight(flight3);

let givenDate = new Date('2024-04-30');

let numberOfFlights = pilot.getFlightsForDate(givenDate);
// Output
// console.log(`On ${givenDate.toDateString()}, you have to join ${numberOfFlights}`);


// // User story 5
// // As an airline manager, I want to find out how much salary I pay all my employees. |||
let airline = new Airline("C8 Airline");

// Create Gate that passenger waiting to get on the plane
let gate1 = new Gate("AA4", 1, "terminal 1", "Open");
let gate2 = new Gate("BB5", 2, "terminal 2", "Open");
let gate3 = new Gate("CC8", 3, "terminal 3", "Open");
let gate4 = new Gate("DD9", 4, "terminal 4", "Open");

// Create passenger 
let passenger1 = new Passenger("012", "A-passport", ReturnTicket.RETURN, "A01", "hor", "lay", Gender.FEMALE);
let passenger2 = new Passenger("010", "B-passport", ReturnTicket.RETURN, "F104", "Both", "Yan", Gender.FEMALE);

passenger1.addGate(gate1);
passenger2.addGate(gate3);
// console.log(passenger1);

// let passengerGate = passenger1.getGate();
// if (passengerGate) {
//     let gateCode = passengerGate.getGateCode();
//     console.log(`So the passenger is waiting at gateCode: ${gateCode}.`);
// } else {
//     console.log("Your plane's gate has not been assigned yet.");
// }

let employee1 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee2 = new Employee("EY2", "Savorn", "Vorn", Gender.FEMALE, 6000);
let employee3 = new Employee("EY3", "Thary", "Oeun", Gender.FEMALE, 5500);
let employee4 = new Employee("EY4", "Layhor", "Met", Gender.MALE, 7000);

airline.addEmployee(employee1);
airline.addEmployee(employee2);
airline.addEmployee(employee3);
airline.addEmployee(employee4);

let totalSalary = airline.getSalary();
// Output
// console.log(`The total salary paid to all employees of ${airline.getName()} is: $${totalSalary}`);


// User story 4 
// As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare.
let chef = new Chef("123", "John", "Doe", Gender.MALE, 1000);

let bookingFlight = new BookingFlight("BKR105", "ABC123", new Date(), new Date());

let meal1 = new Meal(MealType.VEGETARIAN, 2, 1000);
let meal2 = new Meal(MealType.SNACK, 1, 1300);
let meal3 = new Meal(MealType.TEA, 3, 1000);

chef.addFlight(bookingFlight);

bookingFlight.setAMealFromBookingFlight(meal1);
bookingFlight.setAMealFromBookingFlight(meal2);
bookingFlight.setAMealFromBookingFlight(meal3);

let uniqueMealTypes = chef.getMealTypesFromBookingFlight();
// Output
// console.log("meal type for the chef need to prepare:", uniqueMealTypes);


// User story create 1
// As an airline manager, I want to know for a given flight, how many employee working on airline
let airline001 = new Airline("ABC123");

let employee01 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee02 = new Employee("EY2", "John", "Doe", Gender.MALE, 6000);
let employee03 = new Employee("EY3", "Jane", "Smith", Gender.FEMALE, 5500);

airline001.addEmployee(employee01);
airline001.addEmployee(employee02);
airline001.addEmployee(employee03);

let employeeCount = airline001.getEmployeeCount();
// Output
// console.log(`Number of employees for ${airline001.getName()}: ${employeeCount} employees`);

// User story create 2
// As an airline manager, I want to know for a given flight, how many passenger bookingFlight
let bookingFlight07 = new BookingFlight("BKR106", 'FL123', new Date(), new Date());

let passenger01 = new Passenger("011", "A-passport", ReturnTicket.RETURN, "A01", "hor", "lay", Gender.FEMALE);
let passenger02 = new Passenger("012", "B-passport", ReturnTicket.RETURN, "F104", "Both", "Savorn", Gender.FEMALE);
let passenger03 = new Passenger("013", "C-passport", ReturnTicket.NOT_RETURN, "F104", "Thary", "Yan", Gender.FEMALE);

bookingFlight07.addPassenger(passenger01);
bookingFlight07.addPassenger(passenger02);
bookingFlight07.addPassenger(passenger03);

let passengers = bookingFlight07.getPassengers();
// Output
// console.log(`Number of passengers with booking flight: ${passengers.length}`);
