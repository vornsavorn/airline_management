import { Airline } from "./Airline/Airline";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate";
import { Route } from "./Airport/Route";
import { BookingFlight } from "./Booking/BookingFlight";
import { ReturnTicket } from "./Booking/ReturnTicket";
import { Meal} from "./Booking/Meal";
import { MealType } from "./Booking/MealType";
import { Ticket } from "./Booking/Ticket";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
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
console.log(pilot);
console.log(`On ${givenDate.toDateString()}, you have ${numberOfFlights} flights to join.`);


// // User story 5
// // As an airline manager, I want to find out how much salary I pay all my employees. |||
let airline = new Airline("C8 Airline");

// Create Gate that passenger waiting to get on the plane
let gate1 = new Gate("AA4", 1, "terminal 1", "Open");
let gate2 = new Gate("BB5", 2, "terminal 2", "Open");
let gate3 = new Gate("CC8", 3, "terminal 3", "Open");
let gate4 = new Gate("DD9", 4, "terminal 4", "Open");

// Create passenger 
let passenger1 = new Passenger("012","A-passport","A01","hor","lay", Gender.FEMALE);
let passenger2 = new Passenger("010","B-passport","F104","Both","Yan", Gender.FEMALE);
passenger1.addGate(gate1);
passenger2.addGate(gate3);
console.log(passenger1);

let passengerGate = passenger1.getGate();
if (passengerGate) {
    let gateCode = passengerGate.getGateCode();
    console.log(`So the passenger is waiting at gateCode: ${gateCode}.`);
} else {
    console.log("Your plane's gate has not been assigned yet.");
}

// Create employees and add them to the airline
let employee1 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee2 = new Employee("EY2", "Savorn", "Vorn", Gender.FEMALE, 6000);
let employee3 = new Employee("EY3", "Thary", "Oeun", Gender.FEMALE, 5500);
let employee4 = new Employee("EY4", "Layhor", "Met", Gender.MALE, 7000);

airline.addEmployee(employee1);
airline.addEmployee(employee2);
airline.addEmployee(employee3);
airline.addEmployee(employee4);

// Output
let totalSalary = airline.getSalary();
console.log(`The total salary paid to all employees of ${airline.getName()} is: $${totalSalary}`);


// User story 4 
// As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare.
let chef = new Chef("123", "John", "Doe", Gender.MALE);

let bookingFlight = new BookingFlight("ABC123", new Date(), new Date());

let meal1 = new Meal(MealType.VEGETARIAN, 2, 1000);
let meal2 = new Meal(MealType.SNACK, 1, 1300);
let meal3 = new Meal(MealType.TEA, 3, 1000);
 
chef.addFlight(bookingFlight);

bookingFlight.setAMealFromBookingFlight(meal1);
bookingFlight.setAMealFromBookingFlight(meal2);
bookingFlight.setAMealFromBookingFlight(meal3);

let uniqueMealTypes = chef.getMealTypesFromBookingFlight();

console.log("meal type for the chef need to prepare:");
console.log(uniqueMealTypes);


// User story create 
// As an airline manager, I want to know for a given flight, how many employee working on airline
let airline001 = new Airline("ABC123");

let employee01 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee02 = new Employee("EY2", "John", "Doe", Gender.MALE, 6000);
let employee03 = new Employee("EY3", "Jane", "Smith", Gender.FEMALE, 5500);

airline001.addEmployee(employee01);
airline001.addEmployee(employee02);
airline001.addEmployee(employee03);

let employeeCount = airline001.getEmployeeCount();
console.log(`Number of employees for ${airline001.getName()}: ${employeeCount} employees`);


