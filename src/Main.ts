import { Airline } from "./Airline/Airline";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";
import { Gate } from "./Airport/Gate";
import { Passenger } from "./Person/Passenger";


// As an airline manager, I want to find out how much salary I pay all my employees. |||
// Create an instance of the Airline class
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

// Calculate the total salary
let totalSalary = airline.getSalary();
console.log(`The total salary paid to all employees of ${airline.getName()} is: $${totalSalary}`);